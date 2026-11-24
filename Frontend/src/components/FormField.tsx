import { ReactNode } from "react";

// Label + optional character counter + inline error, shared by the contact forms.
export function FormField({ label, id, error, count, max, dark = false, children }: { label: string; id: string; error?: string; count?: number; max?: number; dark?: boolean; children: ReactNode }) {
  const nearLimit = count !== undefined && max !== undefined && count >= max * 0.9;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className={`text-sm font-medium ${dark ? "text-white/90" : ""}`}>{label}</label>
        {max !== undefined && (
          <span className={`text-xs tabular-nums ${nearLimit ? "text-red-500" : dark ? "text-white/50" : "text-muted"}`}>{count ?? 0}/{max}</span>
        )}
      </div>
      {children}
      {error && <p id={`${id}-error`} role="alert" className={`mt-1.5 text-[13px] ${dark ? "text-red-400" : "text-red-600"}`}>{error}</p>}
    </div>
  );
}
