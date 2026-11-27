"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { hero, services, site } from "@/content/site";
import { ArrowIcon } from "./Icons";

const slides = services.filter((s) => s.tag);

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3200);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden bg-[linear-gradient(120deg,#f1f1ef_0%,#f7f7f5_45%,#efefec_100%)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-5 pb-10 pt-6 sm:px-10 lg:pb-12">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" aria-label={`${site.name} home`} className="hidden lg:block">
            <Image src="/logo.png" alt={`${site.name} ${site.tagline}`} width={640} height={167} priority className="h-11 w-auto" />
          </a>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden h-11 items-center rounded-[5px] bg-accent px-[18px] text-[15px] font-medium text-white transition hover:bg-accent-dark sm:inline-flex">
              Contact us
            </a>
          </div>
        </div>

        <div className="relative my-auto grid items-center gap-12 py-8 lg:grid-cols-[1.55fr_1fr] lg:py-10">
          <div className="reveal">
            <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[46px] lg:text-[54px]">
              {hero.titleStart}{" "}
              <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                {hero.titleAccent}
              </span>{" "}
              {hero.titleEnd}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#6e6e6e]">
              {hero.subtitle}<span className="font-semibold text-ink">{hero.subtitleBold}</span>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={hero.primary.href} className="inline-flex h-[52px] items-center gap-2.5 rounded-[4px] bg-accent px-6 font-medium text-white transition hover:bg-accent-dark">
                <ArrowIcon /> {hero.primary.label}
              </a>
              <a href={hero.secondary.href} className="inline-flex h-[52px] items-center rounded-[4px] bg-card px-6 font-medium text-ink transition hover:bg-white">
                {hero.secondary.label}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {hero.avatars.map((a) => (
                  <span
                    key={a.name}
                    title={a.name}
                    className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-2 ring-white ${a.bg}`}
                  >
                    <Image src={a.logo} alt={a.name} fill sizes="44px" className={a.imgClass} />
                  </span>
                ))}
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-accent text-xs font-bold text-white ring-2 ring-white">
                  {hero.morePartners}
                </span>
              </div>
              <p className="text-[15px] leading-snug text-ink/80">{hero.trust[0]}<br />{hero.trust[1]}</p>
            </div>
          </div>

          <a href="#services" className="reveal group relative aspect-[4/3] w-full justify-self-start overflow-hidden rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.18)] block sm:max-w-[420px] lg:justify-self-end lg:max-w-[360px]" aria-label={`${s.name} – ${s.category}`}>
            {slides.map((sl, n) => (
              <Image key={sl.name} src={sl.image} alt="" fill sizes="360px" className={`object-cover transition-opacity duration-700 ${n === i ? "opacity-100" : "opacity-0"}`} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <p className="border-b border-white/40 pb-2 text-[22px] font-bold">{s.name} <span className="text-base font-normal">({s.tag})</span></p>
              <p className="mt-2 text-white/85">{s.category}</p>
            </div>
          </a>
        </div>
      </div>
      <span className="sr-only">{site.name}</span>
    </section>
  );
}
