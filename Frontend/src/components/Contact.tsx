"use client";
import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import { CONTACT_LIMITS, ContactErrors, ContactValues, fieldClass, validateContact } from "@/lib/contact-validation";
import { FormField } from "./FormField";
import { ArrowIcon } from "./Icons";

const empty: ContactValues = { name: "", company: "", email: "", phone: "", description: "" };

export default function Contact() {
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof ContactValues) => (e: { target: { value: string } }) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    // Once the user has tried to submit, keep the messages up to date as they type.
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
      `Name: ${values.name.trim()}\nCompany: ${values.company.trim()}\nEmail: ${values.email.trim()}\nPhone: ${values.phone.trim()}\n\n${values.description.trim()}`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${values.name.trim()}`)}&body=${body}`;
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
          <button type="submit" className="mt-2 flex h-[52px] w-full items-center justify-center gap-2 rounded-[4px] bg-accent font-medium text-white transition hover:bg-accent-dark">
            <ArrowIcon className="h-5 w-5" /> Send message
          </button>
        </form>
      </div>
    </section>
  );
}
