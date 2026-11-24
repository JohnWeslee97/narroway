import { testimonials } from "@/content/site";
import { SectionHeading } from "./Section";

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="w-[320px] shrink-0 rounded-3xl border border-navy/10 bg-white p-7 sm:w-[380px]">
      <div className="text-gold" aria-label="5 stars">★★★★★</div>
      <blockquote className="mt-4 leading-relaxed text-ink/80">“{t.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">{t.company[0]}</span>
        <span>
          <span className="block font-semibold text-navy">{t.name}</span>
          <span className="block text-sm text-ink/55">{t.company}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Client stories" title="Loved by the people we work with" subtitle="Founders and teams who chose a clearer way to grow." />
      </div>
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
        <div className="flex w-max gap-5 animate-marquee">
          {row.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}
