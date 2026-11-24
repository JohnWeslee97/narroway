"use client";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { ChatIcon, HomeIcon, LayersIcon, LinkedinIcon, UserIcon, XIcon, YoutubeIcon } from "./Icons";

const icons = { home: HomeIcon, user: UserIcon, layers: LayersIcon, chat: ChatIcon };
const socials = [
  { href: site.socials.x, Icon: XIcon, label: "X" },
  { href: site.socials.youtube, Icon: YoutubeIcon, label: "YouTube" },
  { href: site.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-20 flex-col items-center justify-between bg-white py-6 lg:flex">
        <div className="flex flex-col items-center">
          <a href="#home" aria-label={`${site.name} home`}>
            <Image src="/logo-mark.png" alt={site.name} width={40} height={30} className="h-7 w-auto" />
          </a>
          <nav className="mt-14 flex flex-col items-center gap-8">
            {nav.map((n) => {
              const Icon = icons[n.icon];
              return (
                <a key={n.href} href={n.href} aria-label={n.label} title={n.label} className="group relative text-ink transition hover:text-accent">
                  <Icon />
                  <span className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-ink px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">{n.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-col items-center gap-5">
          {socials.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-ink transition hover:text-accent"><Icon /></a>
          ))}
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-50 bg-white lg:hidden">
        <div className="flex h-16 items-center justify-between px-5">
          <a href="#home"><Image src="/logo.png" alt={`${site.name} ${site.tagline}`} width={140} height={36} className="h-8 w-auto" /></a>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-11 w-11 items-center justify-center">
            <span className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
        <div className={`grid overflow-hidden bg-white transition-all duration-300 ${open ? "grid-rows-[1fr] border-t border-chip" : "grid-rows-[0fr]"}`}>
          <div className="min-h-0">
            <nav className="px-5 py-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-2xl font-semibold">{n.label}</a>
              ))}
              <div className="mt-4 space-y-1 border-t border-chip pt-4 text-sm text-muted">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block py-1">{site.phone}</a>
                <a href={`mailto:${site.email}`} className="block py-1">{site.email}</a>
              </div>
              <div className="mt-4 flex gap-5 pb-2">
                {socials.map(({ href, Icon, label }) => (<a key={label} href={href} aria-label={label} className="flex h-11 w-11 items-center justify-center"><Icon /></a>))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
