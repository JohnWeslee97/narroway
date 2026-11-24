import { process } from "@/content/site";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />How it works
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">Three steps to steady growth</h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70">{process.intro}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {process.steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl bg-white/[0.04] p-8 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gold-300">{s.step}</span>
                <span className="text-6xl font-extrabold text-white/10">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{s.description}</p>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gold" style={{ width: `${(i + 1) * 33.33}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
