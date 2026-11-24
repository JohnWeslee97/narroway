"use client";
import { useEffect, useRef, useState } from "react";
import { statsBand } from "@/content/site";
import { CheckIcon, TrendIcon, UsersIcon } from "./Icons";

const icons = { users: UsersIcon, trend: TrendIcon, check: CheckIcon };

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1600);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(42,123,184,0.25),transparent_55%),radial-gradient(ellipse_at_10%_100%,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="reveal flex items-start justify-between gap-6">
          <p className="border-l-[3px] border-accent pl-4 text-lg font-medium leading-snug sm:text-xl">
            {statsBand.statement[0]}<br className="hidden sm:block" /> {statsBand.statement[1]}
          </p>
          <span className="shrink-0 text-[13px] text-white/50">{statsBand.label}</span>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {statsBand.stats.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <div key={s.caption} className={`reveal fold relative flex h-[200px] flex-col justify-between p-6 ${i === 0 ? "bg-[#2e7ebb]" : "bg-[#3a3a3a]"}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <span className={`absolute left-0 top-0 h-7 w-7 ${i === 0 ? "bg-white/90" : "bg-[#5a5a5a]"}`} style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
                <p className="text-right text-[44px] font-bold leading-none">
                  {s.prefix}<Count to={s.value} /><span className={i === 0 ? "" : "text-accent"}>{s.suffix}</span>
                </p>
                <div>
                  <div className="h-px w-full bg-white/20" />
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <p className={`text-sm ${i === 0 ? "text-white/85" : "text-white/60"}`}>{s.caption}</p>
                    <Icon className={`h-5 w-5 shrink-0 ${i === 0 ? "text-white/85" : "text-white/50"}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
