"use client";
import { useState } from "react";
import { site } from "@/content/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const subject = encodeURIComponent(`Enquiry from ${form.name || "website"}`);
  const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`);
  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy px-6 py-14 sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to take the narrow way?</h2>
            <p className="mt-5 text-lg text-white/70">Book a free 30-minute consultation. Tell us where you are, and we will show you the next step.</p>
            <div className="mt-8 space-y-2 text-white/80">
              <a href={`mailto:${site.email}`} className="block hover:text-gold-300">{site.email}</a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:text-gold-300">{site.phone}</a>
              <p>{site.location}</p>
            </div>
          </div>
          <form
            className="space-y-4 rounded-3xl bg-white p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
            }}
          >
            <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3.5 outline-none focus:border-gold" />
            <input required type="tel" inputMode="tel" pattern="[0-9+\s-]{10,15}" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3.5 outline-none focus:border-gold" />
            <textarea required rows={4} placeholder="How can we help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-xl border border-navy/15 bg-cream/50 px-4 py-3.5 outline-none focus:border-gold" />
            <button type="submit" className="w-full rounded-full bg-gold py-4 font-semibold text-navy transition hover:bg-gold-300">
              Send enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
