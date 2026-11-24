"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { processSection } from "@/content/site";
import { CursorIcon, PlaneIcon } from "./Icons";

function Intro({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/).map((part, i) =>
        part.startsWith("[") ? <span key={i} className="text-accent">{part.slice(1, -1)}</span> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

function MockOne() {
  return (
    <div className="relative mx-auto h-40 w-56 max-w-full">
      <div className="absolute left-0 top-6 h-28 w-40 -rotate-6 rounded-lg bg-[#d6d6d6]" />
      <div className="absolute left-8 top-3 h-28 w-40 -rotate-2 rounded-lg bg-[#c4c4c4]" />
      <div className="absolute left-16 top-0 flex h-28 w-40 rotate-3 items-end rounded-lg bg-accent p-3 shadow-lg">
        <span className="text-sm font-semibold text-white">30-min call</span>
      </div>
    </div>
  );
}

const names = ["Your Business", "Growth Plan", "Roadmap 2026"];
function MockTwo() {
  const [n, setN] = useState(0);
  const [len, setLen] = useState(0);
  useEffect(() => {
    const word = names[n];
    if (len < word.length) { const t = setTimeout(() => setLen(len + 1), 90); return () => clearTimeout(t); }
    const t = setTimeout(() => { setLen(0); setN((n + 1) % names.length); }, 1600);
    return () => clearTimeout(t);
  }, [len, n]);
  return (
    <div className="mx-auto w-[190px] rounded-[10px] bg-accent p-4 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90"><Image src="/logo-mark.png" alt="" width={18} height={13} className="h-3 w-auto" /></span>
        <p className="min-w-0 flex-1 truncate text-sm font-semibold text-white" aria-label="Your growth plan"><span aria-hidden>{names[n].slice(0, len)}</span><span aria-hidden className="caret">|</span></p>
      </div>
      <div className="mt-4 space-y-2">
        <div className="shimmer h-2 w-full rounded-full" />
        <div className="shimmer h-2 w-4/5 rounded-full" />
        <div className="shimmer h-2 w-3/5 rounded-full" />
      </div>
    </div>
  );
}

function MockThree() {
  return (
    <div className="relative mx-auto flex h-32 w-[200px] items-center justify-center rounded-[10px] bg-accent shadow-lg">
      <div className="press relative rounded-lg bg-white px-5 py-2 text-xs font-semibold text-accent">
        Launch
        <CursorIcon className="absolute -bottom-3 right-1 h-4 w-4 text-ink" />
      </div>
      <PlaneIcon className="fly absolute right-4 top-3 h-7 w-7 text-white" />
    </div>
  );
}

const mocks = [MockOne, MockTwo, MockThree];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <p className="reveal display max-w-5xl text-[28px] font-semibold leading-[1.25] sm:text-[40px]">
          <Intro text={processSection.intro} />
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {processSection.steps.map((s, i) => {
            const Mock = mocks[i];
            return (
              <div key={s.title} className={`reveal flex min-h-[440px] flex-col rounded-lg bg-card p-6 ${i === 1 ? "md:mt-24" : ""}`} style={{ transitionDelay: `${i * 140}ms` }}>
                <span className="w-fit rounded-full bg-chip px-3 py-1 text-xs">{s.step}</span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                <div className="mt-auto flex min-h-[170px] items-center justify-center overflow-hidden pt-10" aria-hidden><Mock /></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
