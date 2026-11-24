import Image from "next/image";
import { nav, services, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image src="/logo-light.png" alt={`${site.name} ${site.tagline}`} width={200} height={52} className="h-12 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-white/60">Strategy, marketing and operations for businesses that want to grow with focus.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">Quick links</p>
          <ul className="mt-5 space-y-1">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="inline-block py-2 text-white/75 hover:text-white">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">Services</p>
          <ul className="mt-5 space-y-1">
            {services.slice(0, 4).map((s) => <li key={s.title}><a href="#services" className="inline-block py-2 text-white/75 hover:text-white">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">Get in touch</p>
          <ul className="mt-5 space-y-1 text-white/75">
            <li><a href={`mailto:${site.email}`} className="inline-block py-2 hover:text-white">{site.email}</a></li>
            <li className="py-2">{site.location}</li>
            <li className="flex gap-2 pt-2">
              {Object.entries(site.socials).map(([k, v]) => (
                <a key={k} href={v} target="_blank" rel="noreferrer" className="flex h-11 min-w-11 items-center justify-center rounded-full border border-white/15 px-3 text-xs font-semibold uppercase hover:border-gold hover:text-gold">{k === "x" ? "X" : k.slice(0, 2)}</a>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/50 sm:px-8">© 2026 {site.name} {site.tagline}. All rights reserved.</p>
      </div>
    </footer>
  );
}
