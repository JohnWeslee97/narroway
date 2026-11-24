import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/site";

const tagStyle = { New: "bg-[#7ed957] text-ink", Popular: "bg-[#f2b441] text-ink" };

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 pt-24 sm:pt-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <h2 className="reveal text-center text-[40px] font-bold sm:text-[64px]">Featured Services</h2>
        <div className="mt-12 h-px w-full bg-[#d6d6d6]" />
        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link key={s.name} href={`/contact?service=${encodeURIComponent(s.name)}`} className="reveal group block" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
                <Image src={s.image} alt={s.name} fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0" />
                <Image src={s.hoverImage} alt="" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <h3 className="text-[17px] font-semibold transition group-hover:text-accent">{s.name}</h3>
                {s.tag && <span className={`rounded px-2 py-0.5 text-[11px] font-medium ${tagStyle[s.tag]}`}>{s.tag}</span>}
              </div>
              <p className="mt-1 text-sm text-muted">{s.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
