import { nav, services, site } from "@/content/site";

export default function Footer() {
  const cols = [
    { title: "Quick Links", links: nav.map((n) => ({ label: n.label, href: n.href })) },
    { title: "Services", links: services.slice(0, 4).map((s) => ({ label: s.name, href: "#services" })) },
    { title: "Based In", text: site.address, links: [{ label: site.email, href: `mailto:${site.email}` }, { label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` }] },
    { title: "Socials", links: [{ label: "Twitter/X", href: site.socials.x }, { label: "Instagram", href: site.socials.instagram }, { label: "Linkedin", href: site.socials.linkedin }] },
  ];
  return (
    <footer className="overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-14 sm:px-10">
        <div className="reveal grid grid-cols-2 content-start gap-x-8 gap-y-8 lg:grid-cols-4">
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
        <p aria-hidden className="wordmark mt-10 select-none pb-2 text-center text-[19vw] font-bold leading-[0.95] tracking-[-0.05em] lg:text-[140px]">Narroway</p>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4 text-[13px] text-white/50 sm:flex-row sm:justify-between sm:px-10">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>{site.name} {site.tagline} • Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}
