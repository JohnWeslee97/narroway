"use client";
import { useState } from "react";
import { faqs } from "@/content/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[40px] font-bold leading-[1.05] sm:text-[64px]">Quick Answers</h2>
          <p className="max-w-xs text-[15px] text-muted">{faqs.note[0]} {faqs.note[1]}</p>
        </div>
        <div className="mt-10 h-px w-full bg-[#d6d6d6]" />
        <div className="mt-10 grid items-start gap-x-6 gap-y-4 md:grid-cols-2">
          {faqs.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal rounded-lg bg-white">
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="flex min-h-[68px] w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium">
                  {f.q}
                  <span className="relative h-[18px] w-[18px] shrink-0 text-accent">
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
                    <span className={`absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 ${isOpen ? "scale-y-0" : ""}`} />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="px-6 pb-6 text-[15px] leading-relaxed text-[#5f5f5f]">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
