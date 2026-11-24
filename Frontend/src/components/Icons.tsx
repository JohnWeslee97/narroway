type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };

export const HomeIcon = ({ className = "h-6 w-6" }: P) => (<svg {...base} className={className}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" /></svg>);
export const UserIcon = ({ className = "h-6 w-6" }: P) => (<svg {...base} className={className}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>);
export const LayersIcon = ({ className = "h-6 w-6" }: P) => (<svg {...base} className={className}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /><path d="m3 17.5 9 5 9-5" /></svg>);
export const ChatIcon = ({ className = "h-6 w-6" }: P) => (<svg {...base} className={className}><path d="M4 5h16v11H8l-4 4V5Z" /><path d="M8 9h8M8 12h5" /></svg>);
export const ArrowIcon = ({ className = "h-5 w-5" }: P) => (<svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const SparkIcon = ({ className = "h-5 w-5" }: P) => (<svg {...base} className={className}><path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" /></svg>);
export const UsersIcon = ({ className = "h-5 w-5" }: P) => (<svg {...base} className={className}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.2.6 3.5 2.8 3.5 6" /></svg>);
export const TrendIcon = ({ className = "h-5 w-5" }: P) => (<svg {...base} className={className}><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>);
export const CheckIcon = ({ className = "h-5 w-5" }: P) => (<svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>);
export const DoubleCheck = ({ className = "h-5 w-5" }: P) => (<svg {...base} strokeWidth={2} className={className}><path d="m2 12 4.5 4.5L15 8M11 16.5l1 1L22 8" /></svg>);
export const PlaneIcon = ({ className = "h-8 w-8" }: P) => (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M2 11.5 22 3l-6.5 18-4-7.5L2 11.5Zm9.6 1.7 2.6 4.9L19 6.2l-7.4 7Z" /></svg>);
export const CursorIcon = ({ className = "h-4 w-4" }: P) => (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M4 2l16 9-7 2-3 7L4 2Z" /></svg>);
export const XIcon = ({ className = "h-5 w-5" }: P) => (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.3l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" /></svg>);
export const YoutubeIcon = ({ className = "h-5 w-5" }: P) => (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.1V8.9L15.6 12l-5.8 3.1Z" /></svg>);
export const LinkedinIcon = ({ className = "h-5 w-5" }: P) => (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9.5Z" /></svg>);
export const StarRow = ({ className = "h-4" }: P) => (
  <span className={`inline-flex gap-0.5 text-[#ffb300] ${className}`} aria-label="5 stars">
    {Array.from({ length: 5 }).map((_, i) => (<svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><path d="m10 1.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5Z" /></svg>))}
  </span>
);
