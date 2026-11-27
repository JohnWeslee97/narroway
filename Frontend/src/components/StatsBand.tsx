import Image from "next/image";
import { ngoClients, statsBand } from "@/content/site";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(42,123,184,0.25),transparent_55%),radial-gradient(ellipse_at_10%_100%,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="reveal">
          <p className="border-l-[3px] border-accent pl-4 text-lg font-medium leading-snug sm:text-xl">
            {statsBand.statement[0]}<br className="hidden sm:block" /> {statsBand.statement[1]}
          </p>
        </div>

        <div className="reveal mt-20">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">Trusted NGO partners</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {ngoClients.map((c) => (
              <div key={c.name} className="flex items-center gap-6 rounded-[10px] bg-white/[0.06] p-6 ring-1 ring-white/10">
                <div className="flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black/40 p-2">
                  <Image src={c.logo} alt={`${c.name} logo`} width={c.logoWidth} height={c.logoHeight} className="max-h-full w-auto object-contain" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold">{c.name}</h3>
                  <p className="mt-1 text-[15px] leading-snug text-white/80">{c.tagline}</p>
                  {c.location && <p className="mt-2 text-[13px] text-white/60">{c.location}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
