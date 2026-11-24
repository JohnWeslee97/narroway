export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-ink/70">{subtitle}</p>}
    </div>
  );
}
