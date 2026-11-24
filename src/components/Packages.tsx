import { packages } from "@/content/site";
import { SectionHeading } from "./Section";

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 bg-sand/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Packages" title="Simple plans. Serious results." subtitle="Start small or go all in. Upgrade or pause any month." />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {packages.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-[2rem] p-9 ${p.highlight ? "bg-navy text-white shadow-2xl shadow-navy/30" : "border border-navy/10 bg-white"}`}>
              {p.badge && <span className="absolute right-8 top-8 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">{p.badge}</span>}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className={`mt-1 ${p.highlight ? "text-white/60" : "text-ink/60"}`}>{p.blurb}</p>
              <p className="mt-8 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">{p.price}</span>
                <span className={p.highlight ? "text-white/60" : "text-ink/60"}>{p.period}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${p.highlight ? "bg-gold text-navy" : "bg-navy text-white"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-10 flex justify-center rounded-full py-4 font-semibold transition ${p.highlight ? "bg-gold text-navy hover:bg-gold-300" : "bg-navy text-white hover:bg-navy-700"}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
