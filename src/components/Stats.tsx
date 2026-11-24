"use client";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site";

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-10 border-y border-navy/10 py-12 md:grid-cols-[1.2fr_repeat(3,1fr)] md:items-center">
        <p className="text-lg font-medium leading-relaxed text-ink/70">
          Built not just to look good, but to perform where it matters most: <span className="font-semibold text-navy">your bottom line.</span>
        </p>
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-5xl font-extrabold tracking-tight text-navy"><Counter {...s} /></p>
            <p className="mt-2 text-sm text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
