"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { hero, services, site } from "@/content/site";
import { ArrowIcon, SparkIcon } from "./Icons";

const slides = services.filter((s) => s.tag);

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3200);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(120deg,#f1f1ef_0%,#f7f7f5_45%,#efefec_100%)]">
      <div className="mx-auto max-w-[1200px] px-5 pb-20 pt-6 sm:px-10 lg:pb-28">
        <div className="flex items-center justify-between">
          <span className="inline-flex h-9 items-center gap-2 rounded-lg bg-chip px-4 text-sm text-ink/70">
            <Image src="/logo-mark.png" alt="" width={20} height={15} className="h-3.5 w-auto" />
            {hero.pill}
          </span>
          <a href="#contact" className="hidden h-11 items-center gap-2 rounded-[5px] bg-accent px-[18px] text-[15px] font-medium text-white transition hover:bg-accent-dark sm:inline-flex">
            <SparkIcon className="h-4 w-4" /> {hero.topCta}
          </a>
        </div>

        <div className="relative mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-[1.45fr_1fr]">
          <div className="reveal">
            <h1 className="text-[42px] font-bold leading-[1.05] sm:text-6xl lg:text-[76px]">
              {hero.titleStart} <span className="text-accent">{hero.titleAccent}</span> {hero.titleEnd}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#6e6e6e]">
              {hero.subtitle}<span className="font-semibold text-ink">{hero.subtitleBold}</span>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={hero.primary.href} className="inline-flex h-[52px] items-center gap-2.5 rounded-[4px] bg-accent px-6 font-medium text-white transition hover:bg-accent-dark">
                <ArrowIcon /> {hero.primary.label}
              </a>
              <a href={hero.secondary.href} className="inline-flex h-[52px] items-center gap-2.5 rounded-[4px] bg-card px-6 font-medium text-ink transition hover:bg-white">
                <SparkIcon /> {hero.secondary.label}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-4">
                {hero.avatars.map((a, n) => (
                  <span key={a} className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold ring-2 ring-white ${["bg-[#1f2937] text-white", "bg-accent text-white", "bg-[#d6d6d6] text-ink", "bg-[#2a2a2a] text-white"][n % 4]}`}>{a}</span>
                ))}
              </div>
              <p className="text-[15px] leading-snug text-ink/80">{hero.trust[0]}<br />{hero.trust[1]}</p>
            </div>
          </div>

          <a href="#services" className="reveal group relative hidden aspect-[4/3] w-full max-w-[360px] justify-self-end overflow-hidden rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.18)] lg:block" aria-label={`${s.name} – ${s.category}`}>
            {slides.map((sl, n) => (
              <Image key={sl.name} src={sl.image} alt="" fill sizes="360px" className={`object-cover transition-opacity duration-700 ${n === i ? "opacity-100" : "opacity-0"}`} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <p className="border-b border-white/40 pb-2 text-[22px] font-bold">{s.name} <span className="text-base font-normal">({s.tag})</span></p>
              <p className="mt-2 text-white/75">{s.category}</p>
            </div>
          </a>
        </div>
      </div>
      <span className="sr-only">{site.name}</span>
    </section>
  );
}
