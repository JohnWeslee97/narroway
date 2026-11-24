import Image from "next/image";
import { testimonials } from "@/content/site";
import { StarRow } from "./Icons";

const avatarColors = ["bg-accent", "bg-[#7a5c3c]", "bg-[#3a3a3a]", "bg-[#5b6b7a]"];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-32">
      <Image src="/images/testimonial-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#141414]/80" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-10">
        <h2 className="reveal text-[40px] font-bold leading-[1.05] sm:text-[64px]">{testimonials.title[0]}<br />{testimonials.title[1]}</h2>
        <div className="reveal mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="border-l-[3px] border-accent pl-4 text-white/75">{testimonials.intro[0]}<br className="hidden sm:block" /> {testimonials.intro[1]}</p>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {["RK", "AS", "MV"].map((a, i) => (<span key={a} className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold ring-2 ring-white ${avatarColors[i]}`}>{a}</span>))}
            </div>
            <div>
              <StarRow />
              <p className="text-[13px]">{testimonials.rating}</p>
            </div>
          </div>
        </div>
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.items.map((t, i) => (
            <figure key={i} className="reveal mb-6 break-inside-avoid rounded-xl bg-[#1e1e1e]/85 p-6 backdrop-blur-sm" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
              {t.logo && (
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-black tracking-[0.2em] text-white/85">{t.logo}</span>
                  <StarRow />
                </div>
              )}
              <blockquote className="text-[15px] leading-relaxed text-[#ededed]">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${avatarColors[i % 4]}`}>{t.company[0]}</span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-[13px] text-white/55">{t.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
