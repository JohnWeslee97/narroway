import { pricing } from "@/content/site";
import { ArrowIcon, DoubleCheck } from "./Icons";

function Folders() {
  return (
    <div className="relative h-11 w-14">
      <div className="absolute bottom-0 left-0 h-8 w-12 rounded-md bg-[#d6d6d6]" />
      <div className="absolute bottom-1 left-1.5 h-8 w-12 rounded-md bg-[#bdbdbd]" />
      <div className="absolute bottom-2 left-3 h-8 w-11 rounded-md bg-accent" />
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="reveal text-center">
          <h2 className="text-[40px] font-bold leading-[1.05] sm:text-[64px]">{pricing.titleStart}<br /><span className="text-accent">{pricing.titleAccent}</span> {pricing.titleEnd}</h2>
          <p className="mt-5 text-muted">{pricing.sub}<span className="text-ink">{pricing.subBold}</span></p>
        </div>
        <div className="mx-auto mt-14 grid max-w-[790px] gap-6 md:grid-cols-2">
          {pricing.plans.map((p, i) => (
            <div key={p.name} className="reveal flex min-h-[560px] flex-col rounded-lg bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)]" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    {p.best && <span className="rounded bg-accent-dark px-2.5 py-1 text-[13px] text-white">Best Value</span>}
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.blurb}</p>
                </div>
                <Folders />
              </div>
              <p className="mt-8 flex items-baseline gap-3">
                {p.oldPrice && <span className="text-2xl text-muted line-through">{p.oldPrice}</span>}
                <span className="text-5xl font-bold">{p.price}</span>
                <span className="text-sm text-muted">/ month</span>
              </p>
              <a href="#contact" className={`mt-8 flex h-[52px] items-center justify-center gap-2 rounded-[4px] font-medium transition ${p.best ? "bg-accent text-white hover:bg-accent-dark" : "bg-[#f4f4f2] text-ink hover:bg-chip"}`}>
                <ArrowIcon /> {p.cta}
              </a>
              <p className="mt-8 text-[13px] text-muted">What&apos;s Included:</p>
              <ul className="mt-4 flex-1 space-y-3">
                {p.features.map((f) => (<li key={f} className="flex items-center gap-3 text-sm"><DoubleCheck className="h-5 w-5 text-accent" />{f}</li>))}
              </ul>
              <p className="mt-8 border-t border-chip pt-5 text-sm text-muted">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
