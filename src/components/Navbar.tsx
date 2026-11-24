"use client";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt={`${site.name} ${site.tagline}`} width={168} height={44} priority className="h-10 w-auto" />
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-navy/10 bg-white/70 p-1.5 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition hover:bg-navy hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-700 md:inline-flex">
          Contact us
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-navy transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-navy transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-navy/5 bg-cream px-5 pb-6 md:hidden">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-navy/5 py-4 text-lg font-medium text-navy">
              {item.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="mt-5 block text-sm text-ink/70">{site.email}</a>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 flex justify-center rounded-full bg-navy py-3.5 font-semibold text-white">
            Contact us
          </a>
        </div>
      )}
    </header>
  );
}
