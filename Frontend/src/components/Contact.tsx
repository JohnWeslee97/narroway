"use client";
import { FormEvent, useState } from "react";
import { services, site } from "@/content/site";
import { CONTACT_LIMITS, ContactErrors, ContactValues, fieldClass, validateContact } from "@/lib/contact-validation";
import { FormField } from "./FormField";
import { ArrowIcon } from "./Icons";

const empty: ContactValues = { name: "", company: "", email: "", phone: "", description: "" };

type ContactProps = {
  showService?: boolean;
  initialService?: string;
};

export default function Contact({ showService = false, initialService = "" }: ContactProps) {
  const [service, setService] = useState(initialService);
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);

  const set = (key: keyof ContactValues) => (e: { target: { value: string } }) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (status !== "idle") setStatus("idle");
    // Once the user has tried to submit, keep the messages up to date as they type.
    if (submitted) setErrors(validateContact(next));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setSubmitted(true);
    if (Object.keys(found).length > 0) {
      e.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

    setStatus("sending");
    setStatusMessage("");

    const trimmed = {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      description: values.description.trim(),
    };

    const sendResend = async (): Promise<boolean> => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...trimmed,
          hasService: showService,
          service: showService ? service : undefined,
          botcheck,
        }),
      });
      const data = (await res.json()) as { ok?: boolean };
      return res.ok && !!data.ok;
    };

    const sendWeb3Forms = async (): Promise<boolean> => {
      if (!accessKey) return false;
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${showService ? "Free Consultation" : "New Enquiry"} — ${trimmed.name}`,
          from_name: "Narroway Website",
          replyto: trimmed.email,
          botcheck,
          name: trimmed.name,
          company: trimmed.company || "—",
          email: trimmed.email,
          phone: trimmed.phone,
          ...(showService ? { service: service || "Not sure yet" } : {}),
          message: trimmed.description,
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      return res.ok && !!data.success;
    };

    const results = await Promise.allSettled([sendResend(), sendWeb3Forms()]);
    const delivered = results.some((r) => r.status === "fulfilled" && r.value);

    if (delivered) {
      setStatus("sent");
      setStatusMessage("Thanks! Your message has been sent. We'll reply within one working day.");
      setValues(empty);
      setSubmitted(false);
    } else {
      setStatus("error");
      setStatusMessage("Could not send right now. Please try again or email us directly.");
    }
  };

  const invalid = (k: keyof ContactValues) => (errors[k] ? true : undefined);
  const tone = "dark" as const;

  return (
    <section id="contact" className="scroll-mt-16 overflow-hidden bg-black pb-16 pt-16 text-white sm:pb-20 sm:pt-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="reveal">
          <h2 className="text-[32px] font-bold leading-[1.05] sm:text-[48px]">Get In Touch</h2>
          <ul className="mt-6 list-disc space-y-1.5 pl-5 text-[15px] text-white/70">
            <li><b className="text-white">Free 30-minute</b> business health check</li>
            <li>We reply with next steps within one working day</li>
            <li>Tell us what you need, and we will suggest a plan</li>
          </ul>
        </div>

        <form noValidate onSubmit={onSubmit} className="reveal w-full space-y-3">
          <input
            type="checkbox"
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          {showService && (
            <FormField label="Service" id="c-service" dark>
              <select
                id="c-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{ colorScheme: "dark" }}
                className={fieldClass(false, tone)}
              >
                <option value="">Not sure yet</option>
                {services.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
            </FormField>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
          <FormField label="Name" id="c-name" error={errors.name} count={values.name.length} max={CONTACT_LIMITS.name} dark>
            <input id="c-name" maxLength={CONTACT_LIMITS.name} value={values.name} onChange={set("name")} aria-invalid={invalid("name")} aria-describedby={errors.name ? "c-name-error" : undefined} placeholder="Enter your name" className={fieldClass(!!errors.name, tone)} />
          </FormField>
          <FormField label="Company name" id="c-company" error={errors.company} count={values.company.length} max={CONTACT_LIMITS.company} dark>
            <input id="c-company" maxLength={CONTACT_LIMITS.company} value={values.company} onChange={set("company")} aria-invalid={invalid("company")} aria-describedby={errors.company ? "c-company-error" : undefined} placeholder="Company or organisation" className={fieldClass(!!errors.company, tone)} />
          </FormField>
          <FormField label="Email ID" id="c-email" error={errors.email} dark>
            <input id="c-email" type="email" maxLength={CONTACT_LIMITS.email} value={values.email} onChange={set("email")} aria-invalid={invalid("email")} aria-describedby={errors.email ? "c-email-error" : undefined} placeholder="you@company.com" className={fieldClass(!!errors.email, tone)} />
          </FormField>
          <FormField label="Phone number" id="c-phone" error={errors.phone} dark>
            <input id="c-phone" type="tel" inputMode="tel" maxLength={CONTACT_LIMITS.phone} value={values.phone} onChange={set("phone")} aria-invalid={invalid("phone")} aria-describedby={errors.phone ? "c-phone-error" : undefined} placeholder="+91 98765 43210" className={fieldClass(!!errors.phone, tone)} />
          </FormField>
          </div>
          <FormField label="Description" id="c-description" error={errors.description} count={values.description.length} max={CONTACT_LIMITS.description} dark>
            <textarea id="c-description" rows={3} maxLength={CONTACT_LIMITS.description} value={values.description} onChange={set("description")} aria-invalid={invalid("description")} aria-describedby={errors.description ? "c-description-error" : undefined} placeholder="Tell us what you need help with" className={fieldClass(!!errors.description, tone)} />
          </FormField>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 flex h-[52px] w-full items-center justify-center gap-2 rounded-[4px] bg-accent font-medium text-white transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            <ArrowIcon className="h-5 w-5" /> {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p role="status" className="rounded-[4px] border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-[14px] text-emerald-300">
              {statusMessage}
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="rounded-[4px] border border-red-500/40 bg-red-500/10 px-4 py-3 text-[14px] text-red-300">
              {statusMessage}{" "}
              <a href={`mailto:${site.email}`} className="underline hover:text-white">
                {site.email}
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
