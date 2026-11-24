"use client";
import { useState } from "react";
import { faqs } from "@/content/site";
import { SectionHeading } from "./Section";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading center={false} eyebrow="FAQ" title="Quick answers" subtitle="The questions we hear most. Ask us anything else." />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-navy/10 bg-white">
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-navy">
                  {f.q}
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-xl transition ${isOpen ? "rotate-45 bg-gold" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-ink/70">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
