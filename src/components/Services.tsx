import { services } from "@/content/site";
import { SectionHeading } from "./Section";

const icons: Record<string, React.ReactNode> = {
  compass: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z" />,
  megaphone: <path d="M4 10v4h3l6 4V6L7 10H4Zm12-1.5a4 4 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  shield: <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  hands: <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="What we do" title="Services that move your business forward" subtitle="Pick one, or let us run the whole engine. Every service is built around measurable results." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-navy/10">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[s.icon]}</svg>
                </span>
                {s.tag && <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-navy">{s.tag}</span>}
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/65">{s.description}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                Enquire <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
