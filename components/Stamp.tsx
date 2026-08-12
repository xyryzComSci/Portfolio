import type { Status } from "@/data/projects";

type Tone = "green" | "amber" | "slate";

const toneFor: Record<Status, Tone> = {
  SHIPPED: "green",
  "IN PROGRESS": "amber",
  CONCEPT: "slate",
  PLANNED: "slate",
  PROTOTYPE: "amber",
};

const toneClass: Record<Tone, string> = {
  green: "border-stamp-green/60 bg-stamp-green-bg text-stamp-green",
  amber: "border-stamp-amber/60 bg-stamp-amber-bg text-stamp-amber",
  slate: "border-stamp-slate/60 bg-stamp-slate-bg text-stamp-slate",
};

/**
 * Dashed rubber-stamp badge. Keeps its paper-stock colors in both themes —
 * it is the one piece of ledger texture that survives into the plain register.
 */
export default function Stamp({
  label,
  tone,
  className = "",
}: {
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const resolved = tone ?? toneFor[label as Status] ?? "slate";
  return (
    <span
      className={`inline-flex items-center border border-dashed px-2 py-[3px] font-mono text-[10px] uppercase tracking-[0.14em] ${toneClass[resolved]} ${className}`}
    >
      {label}
    </span>
  );
}
