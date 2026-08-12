import Link from "next/link";
import { hero, stages, deliveredStage } from "@/data/content";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ── Ledger register: dark desk canvas, hero + working ledger ── */}
      <div className="bg-surface">
        <section className="shell py-20 sm:py-28">
          <p className="eyebrow flex items-center gap-2 text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-stamp-green" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight text-content sm:text-[2.75rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-muted">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-sm bg-content px-5 py-2.5 text-[13px] font-medium text-surface transition-opacity hover:opacity-90"
            >
              View Work
            </Link>

            {site.resumeReady ? (
              <a
                href={site.resumePath}
                download
                className="rounded-sm border border-hairline/30 px-5 py-2.5 text-[13px] text-content transition-colors hover:border-hairline/60"
              >
                Resume
              </a>
            ) : (
              <span
                title="Resume PDF not added yet"
                aria-disabled="true"
                className="cursor-not-allowed rounded-sm border border-dashed border-hairline/25 px-5 py-2.5 text-[13px] text-muted"
              >
                Resume
              </span>
            )}

            <Link
              href="/contact"
              className="rounded-sm border border-hairline/30 px-5 py-2.5 text-[13px] text-content transition-colors hover:border-hairline/60"
            >
              Contact
            </Link>
          </div>

          <dl className="mt-14 grid gap-8 border-t border-hairline/15 pt-8 sm:grid-cols-3">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl text-content">{s.value}</dt>
                <dd className="mt-1 max-w-[22rem] text-[13px] leading-snug text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="shell border-t border-hairline/10 py-20">
          <SectionHeading
            label="How I work"
            title="Ledger of a delivery"
            note="Five stages, every time — the same shape whether the project is a billing bot or a full application."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => (
              <article key={stage.number} className="bg-surface-alt p-5 text-content">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-ink/50">{stage.number}</span>
                  <span
                    className={`border border-dashed px-2 py-[3px] font-mono text-[10px] uppercase tracking-[0.14em] ${
                      stage.tone === "amber"
                        ? "border-stamp-amber/60 bg-stamp-amber-bg text-stamp-amber"
                        : "border-stamp-green/60 bg-stamp-green-bg text-stamp-green"
                    }`}
                  >
                    {stage.stamp}
                  </span>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-ink/80">{stage.body}</p>
              </article>
            ))}
          </div>

          {/* 05 sits alone as a full-width dashed strip, per the ledger draft. */}
          <article className="mt-4 border border-dashed border-hairline/30 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] text-muted">{deliveredStage.number}</span>
              <span className="border border-dashed border-stamp-green/60 bg-stamp-green-bg px-2 py-[3px] font-mono text-[10px] uppercase tracking-[0.14em] text-stamp-green">
                {deliveredStage.stamp}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-muted">
              {deliveredStage.body}
            </p>
          </article>
        </section>
      </div>

      {/* ── Plain register: featured work ── */}
      <section className="shell py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-muted">Featured work</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Three systems, built end-to-end
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-[12px] text-muted underline-offset-4 hover:text-content hover:underline"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
