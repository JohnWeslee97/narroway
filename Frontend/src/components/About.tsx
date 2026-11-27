import Link from "next/link";
import { aboutUs, site } from "@/content/site";
import { ArrowIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[40px] font-bold leading-[1.05] sm:text-[64px]">{aboutUs.title}</h2>
          <p className="max-w-md text-[15px] text-muted">{site.address}</p>
        </div>
        <div className="mt-10 h-px w-full bg-[#d6d6d6]" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="reveal space-y-5">
            <p className="text-[20px] leading-relaxed text-ink">{aboutUs.intro}</p>
            <p className="text-[16px] leading-relaxed text-[#5f5f5f]">{aboutUs.body}</p>
            <Link href={aboutUs.cta.href} className="mt-4 inline-flex h-[52px] items-center gap-2.5 rounded-[4px] bg-accent px-6 font-medium text-white transition hover:bg-accent-dark">
              <ArrowIcon /> {aboutUs.cta.label}
            </Link>
          </div>

          <div className="grid gap-4">
            {aboutUs.values.map((v, i) => (
              <div key={v.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div
                  className="shiny-card group relative overflow-hidden rounded-xl border border-accent/15 bg-white bg-gradient-to-br from-white via-[#fcfdff] to-[#edf4fb] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_10px_28px_-10px_rgba(42,123,184,0.24),0_2px_6px_rgba(16,16,16,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_16px_34px_-10px_rgba(42,123,184,0.34)]"
                  style={{ ["--shine-delay" as string]: `${i * 900}ms` }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent/45 to-transparent"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(42,123,184,0.14)_0%,transparent_70%)]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
                  />
                  <h3 className="relative z-10 text-[18px] font-semibold text-ink">{v.title}</h3>
                  <p className="relative z-10 mt-2 text-[15px] leading-relaxed text-muted">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
