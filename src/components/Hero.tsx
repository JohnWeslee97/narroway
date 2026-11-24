import { hero } from "@/content/site";
import { Eyebrow } from "./Section";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 15 15 5M7 5h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[420px] w-[420px] rounded-full bg-navy/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center animate-rise">
          <Eyebrow>{hero.badge}</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            {hero.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="relative whitespace-nowrap text-gold">
              {hero.title.split(" ").slice(-1)}
              <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">{hero.subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={hero.primaryCta.href} className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-navy-700">
              {hero.primaryCta.label}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition group-hover:rotate-45"><Arrow /></span>
            </a>
            <a href={hero.secondaryCta.href} className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-7 py-4 font-semibold text-navy transition hover:border-navy/40">
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {hero.trustInitials.map((i, n) => (
                <span key={i} className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream text-sm font-bold ${n % 2 ? "bg-gold text-navy" : "bg-navy text-white"}`}>
                  {i}
                </span>
              ))}
            </div>
            <p className="text-left text-sm font-medium text-ink/70">{hero.trustLine}</p>
          </div>
        </div>

        {/* Showcase card */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] bg-navy p-6 shadow-2xl shadow-navy/30 sm:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-2">
                <p className="text-sm font-medium text-white/60">Monthly enquiries</p>
                <p className="mt-2 text-4xl font-bold text-white">+128%</p>
                <div className="mt-6 flex h-32 items-end gap-2">
                  {[30, 42, 38, 55, 50, 68, 74, 70, 86, 92, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-gold/60 to-gold-300" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl bg-gold p-6 text-navy">
                  <p className="text-sm font-semibold">Compliance</p>
                  <p className="mt-1 text-3xl font-extrabold">On time</p>
                  <p className="mt-1 text-sm text-navy/70">GST and filings handled</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <p className="text-sm text-white/60">Ad return</p>
                  <p className="mt-1 text-3xl font-bold text-white">3.4x</p>
                  <p className="mt-1 text-sm text-white/50">on Meta campaigns</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-white/40">Illustrative dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}
