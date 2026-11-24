"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { ChatIcon, HomeIcon, LayersIcon, LinkedinIcon, UserIcon, XIcon, YoutubeIcon } from "./Icons";

const icons = { home: HomeIcon, user: UserIcon, layers: LayersIcon, chat: ChatIcon };
const socials = [
  { href: site.socials.x, Icon: XIcon, label: "X" },
  { href: site.socials.youtube, Icon: YoutubeIcon, label: "YouTube" },
  { href: site.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Sidebar() {
  // open: tapped open on mobile. hover: opened by the mouse on the desktop rail.
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const expanded = open || hover;

  // Close on Escape; lock page scroll only while the mobile drawer is open.
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setHover(false);
      }
    };
    document.addEventListener("keydown", onKey);
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [expanded, open]);

  const close = () => {
    setOpen(false);
    setHover(false);
  };

  return (
    <>
      {/* Desktop rail: hovering it slides the drawer out */}
      <aside onMouseEnter={() => setHover(true)} className="fixed inset-y-0 left-0 z-50 hidden w-20 flex-col items-center justify-between bg-white py-6 lg:flex">
        <div className="flex flex-col items-center">
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
          <a href="#home" onClick={close}><Image src="/logo.png" alt={`${site.name} ${site.tagline}`} width={140} height={36} className="h-8 w-auto" /></a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile slide-in drawer */}
      <div className="pointer-events-none fixed inset-0 z-[60]">
        {/* Dimmed backdrop: mobile only, so the desktop page stays usable */}
        <div
          onClick={close}
          aria-hidden="true"
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "opacity-0"}`}
        />
        <aside
          id="mobile-drawer"
          aria-label="Main menu"
          inert={!expanded}
          onMouseLeave={() => setHover(false)}
          className={`pointer-events-auto absolute inset-y-0 left-0 flex w-[78%] max-w-[300px] flex-col bg-white px-7 pb-8 pt-6 shadow-xl transition-transform duration-300 ease-out ${expanded ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <a href="#home" onClick={close} aria-label={`${site.name} home`}>
              <Image src="/logo.png" alt={`${site.name} ${site.tagline}`} width={140} height={36} className="h-8 w-auto" />
            </a>
            <button type="button" aria-label="Close menu" onClick={close} className="flex h-10 w-10 items-center justify-center text-ink">
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-1">
            {nav.map((n) => {
              const Icon = icons[n.icon];
              return (
                <a key={n.href} href={n.href} onClick={close} className="flex items-center gap-4 rounded-lg py-3 text-[17px] text-ink transition hover:text-accent">
                  <Icon className="h-6 w-6 shrink-0" />
                  {n.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-5 border-t border-chip pt-6">
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" onClick={close} className="flex items-center gap-4 text-[16px] text-ink transition hover:text-accent">
                <Icon className="h-5 w-5 shrink-0" />
                {label === "X" ? "Twitter / X" : label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
