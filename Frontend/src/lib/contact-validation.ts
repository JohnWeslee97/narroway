// Shared rules for every contact form on the site.
export const CONTACT_LIMITS = { name: 60, company: 80, email: 254, phone: 17, description: 500 } as const;
export const DESCRIPTION_MIN = 10;

export type ContactValues = { name: string; company: string; email: string; phone: string; description: string };
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};

  const name = v.name.trim();
  if (!name) e.name = "Please enter your name";
  else if (name.length < 2) e.name = "Name must be at least 2 characters";
  else if (!/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) e.name = "Use letters, spaces, dots, apostrophes or hyphens only";

  const company = v.company.trim();
  if (company && !/^[\p{L}\p{N}\s&.,'()/-]+$/u.test(company)) e.company = "Company name contains unsupported characters";

  const email = v.email.trim();
  if (!email) e.email = "Please enter your email address";
  else if (email.length > CONTACT_LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Enter a valid email, e.g. name@company.com";

  const phone = v.phone.replace(/[\s-]/g, "");
  const digits = phone.replace(/^\+/, "");
  if (!phone) e.phone = "Please enter your phone number";
  else if (!/^\+?\d+$/.test(phone)) e.phone = "Use digits only, with an optional leading +";
  else if (digits.length < 10 || digits.length > 13) e.phone = "Enter a valid phone number (10 digits)";

  const description = v.description.trim();
  if (!description) e.description = "Please describe what you need help with";
  else if (description.length < DESCRIPTION_MIN) e.description = `Please write at least ${DESCRIPTION_MIN} characters`;

  return e;
}

// "light" = white card (/contact page), "dark" = black section style used on the home page.
export const fieldClass = (hasError: boolean, tone: "light" | "dark" = "light") =>
  tone === "dark"
    ? `w-full rounded-[4px] border-y bg-[#262626] px-4 py-4 text-[15px] text-white outline-none placeholder:text-white/60 focus:border-accent ${hasError ? "border-red-500" : "border-white/10"}`
    : `w-full rounded-[4px] border bg-white px-4 py-3 text-[15px] outline-none placeholder:text-muted focus:border-accent ${hasError ? "border-red-500" : "border-chip"}`;
