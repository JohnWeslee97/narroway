"use client";
import { useState } from "react";
import { discount, nav, services, site } from "@/content/site";
import { ArrowIcon } from "./Icons";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const cols = [
    { title: "Quick Links", links: nav.map((n) => ({ label: n.label, href: n.href })) },
    { title: "Services", links: services.slice(0, 4).map((s) => ({ label: s.name, href: "#services" })) },
    { title: "Based In", text: site.address, links: [{ label: site.email, href: `mailto:${site.email}` }, { label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` }] },
    { title: "Socials", links: [{ label: "Twitter/X", href: site.socials.x }, { label: "Instagram", href: site.socials.instagram }, { label: "Linkedin", href: site.socials.linkedin }] },
  ];
  return (
    <footer id="contact" className="scroll-mt-16 overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-24 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal">
            <h2 className="text-[40px] font-bold leading-[1.05] sm:text-[64px]">{discount.title[0]}<br />{discount.title[1]}</h2>
            <ul className="mt-6 list-disc space-y-1.5 pl-5 text-[15px] text-white/70">
              {discount.bullets.map((b) => (<li key={b.rest}>{b.bold && <b className="text-white">{b.bold}</b>}{b.rest}</li>))}
            </ul>
            <form
              className="mt-8 w-full max-w-[300px] space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nI'd like to book a free consultation.`);
                window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Free consultation request")}&body=${body}`;
              }}
            >
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="h-[52px] w-full rounded-[4px] border-y border-white/10 bg-[#262626] px-4 text-[15px] outline-none placeholder:text-white/60 focus:border-accent" />
              <input required type="tel" inputMode="tel" pattern="[0-9+\s-]{10,15}" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="h-[52px] w-full rounded-[4px] border-y border-white/10 bg-[#262626] px-4 text-[15px] outline-none placeholder:text-white/60 focus:border-accent" />
              <button type="submit" className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[4px] bg-accent font-medium text-white transition hover:bg-accent-dark">
                <ArrowIcon className="h-5 w-5" /> {discount.cta}
              </button>
            </form>
          </div>
          <div className="reveal grid grid-cols-2 content-start gap-x-8 gap-y-10 lg:pt-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="font-semibold">{c.title}</p>
                {c.text && <p className="mt-4 text-sm leading-relaxed text-[#b0b0b0]">{c.text}</p>}
                <ul className="mt-4 space-y-1">
                  {c.links.map((l) => (<li key={l.label}><a href={l.href} className="inline-block break-all py-1.5 text-sm text-[#b0b0b0] transition hover:text-white">{l.label}</a></li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p aria-hidden className="wordmark mt-16 select-none pb-6 text-center text-[19vw] font-bold leading-[0.95] tracking-[-0.05em] lg:text-[200px]">Narroway</p>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-6 text-[13px] text-white/50 sm:flex-row sm:justify-between sm:px-10">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>{site.name} {site.tagline} • Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}
