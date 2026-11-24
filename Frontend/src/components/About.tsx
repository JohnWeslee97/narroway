import Link from "next/link";
import { aboutUs, site } from "@/content/site";
import { ArrowIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 pb-24 sm:pb-32">
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
              <div key={v.title} className="reveal rounded-lg bg-white p-6" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-[18px] font-semibold">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
