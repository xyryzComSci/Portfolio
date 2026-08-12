import type { Stat } from "@/data/projects";

// Static class strings — Tailwind can't see interpolated ones.
const cols: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/** Numbers stated plainly, never decorated. */
export default function StatRow({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <dl
      className={`grid gap-6 border-y py-6 sm:grid-cols-2 ${cols[stats.length] ?? "lg:grid-cols-4"} ${
        dark ? "border-paper/15" : "border-hairline"
      }`}
    >
      {stats.map((s) => (
        <div key={s.label}>
          <dt className={`font-mono text-xl ${dark ? "text-paper" : "text-content"}`}>{s.value}</dt>
          <dd className={`mt-1 text-[13px] leading-snug ${dark ? "text-paper/60" : "text-muted"}`}>
            {s.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
