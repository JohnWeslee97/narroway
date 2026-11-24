"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { services, site } from "@/content/site";
import { CONTACT_LIMITS, ContactErrors, ContactValues, fieldClass, validateContact } from "@/lib/contact-validation";
import { FormField } from "@/components/FormField";

const empty: ContactValues = { name: "", company: "", email: "", phone: "", description: "" };

function ContactForm() {
  // Pre-select the service the visitor clicked on the home page (/contact?service=...).
  const searchParams = useSearchParams();
  const [service, setService] = useState(searchParams.get("service") ?? "");
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof ContactValues) => (e: { target: { value: string } }) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (submitted) setErrors(validateContact(next));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setSubmitted(true);
    if (Object.keys(found).length > 0) {
      e.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    const body = encodeURIComponent(
      `Service: ${service || "Not sure yet"}\nName: ${values.name.trim()}\nCompany: ${values.company.trim()}\nEmail: ${values.email.trim()}\nPhone: ${values.phone.trim()}\n\n${values.description.trim()}`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Free consultation request")}&body=${body}`;
  };

  const invalid = (k: keyof ContactValues) => (errors[k] ? true : undefined);

  return (
    <div className="min-h-screen bg-canvas">
      <header className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-6 sm:px-10">
        <Link href="/" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt={`${site.name} ${site.tagline}`} width={640} height={167} className="h-9 w-auto" />
        </Link>
        <Link href="/" className="text-[15px] font-medium text-ink/70 transition hover:text-accent">Back to home</Link>
      </header>

      <main className="mx-auto grid max-w-[1100px] gap-12 px-5 pb-24 pt-8 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:pt-16">
        <section>
          <h1 className="text-[40px] font-bold leading-[1.05] sm:text-[56px]">Book a free consultation</h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
            Tell us a little about your business and what you need. We will reply with the next steps, usually within one working day.
          </p>

          <div className="mt-10 space-y-5 text-[16px]">
            <a href={`mailto:${site.email}`} className="block transition hover:text-accent">{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block transition hover:text-accent">{site.phone}</a>
            <p className="text-muted">{site.address}</p>
          </div>
        </section>

        <form noValidate onSubmit={onSubmit} className="rounded-[10px] bg-card p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] sm:p-8">
          <div className="space-y-5">
            <FormField label="Service" id="p-service">
              <select id="p-service" value={service} onChange={(e) => setService(e.target.value)} className={fieldClass(false)}>
                <option value="">Not sure yet</option>
                {services.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Your name" id="p-name" error={errors.name} count={values.name.length} max={CONTACT_LIMITS.name}>
              <input id="p-name" maxLength={CONTACT_LIMITS.name} value={values.name} onChange={set("name")} aria-invalid={invalid("name")} aria-describedby={errors.name ? "p-name-error" : undefined} placeholder="Enter your name" className={fieldClass(!!errors.name)} />
            </FormField>
            <FormField label="Company name" id="p-company" error={errors.company} count={values.company.length} max={CONTACT_LIMITS.company}>
              <input id="p-company" maxLength={CONTACT_LIMITS.company} value={values.company} onChange={set("company")} aria-invalid={invalid("company")} aria-describedby={errors.company ? "p-company-error" : undefined} placeholder="Company or organisation" className={fieldClass(!!errors.company)} />
            </FormField>
            <FormField label="Email ID" id="p-email" error={errors.email}>
              <input id="p-email" type="email" maxLength={CONTACT_LIMITS.email} value={values.email} onChange={set("email")} aria-invalid={invalid("email")} aria-describedby={errors.email ? "p-email-error" : undefined} placeholder="you@company.com" className={fieldClass(!!errors.email)} />
            </FormField>
            <FormField label="Phone number" id="p-phone" error={errors.phone}>
              <input id="p-phone" type="tel" inputMode="tel" maxLength={CONTACT_LIMITS.phone} value={values.phone} onChange={set("phone")} aria-invalid={invalid("phone")} aria-describedby={errors.phone ? "p-phone-error" : undefined} placeholder="+91 98765 43210" className={fieldClass(!!errors.phone)} />
            </FormField>
            <FormField label="What do you need help with?" id="p-description" error={errors.description} count={values.description.length} max={CONTACT_LIMITS.description}>
              <textarea id="p-description" rows={4} maxLength={CONTACT_LIMITS.description} value={values.description} onChange={set("description")} aria-invalid={invalid("description")} aria-describedby={errors.description ? "p-description-error" : undefined} placeholder="A few lines about your business and goals" className={fieldClass(!!errors.description)} />
            </FormField>
            <button type="submit" className="flex h-[52px] w-full items-center justify-center rounded-[4px] bg-accent font-medium text-white transition hover:bg-accent-dark">
              Request a consultation
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default function ContactPage() {
  // useSearchParams needs a Suspense boundary during static rendering.
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}
