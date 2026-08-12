import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import Stamp from "@/components/Stamp";
import StatRow from "@/components/StatRow";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.hook };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="shell py-12 sm:py-16">
      <Link
        href="/projects"
        className="font-mono text-[12px] text-muted underline-offset-4 hover:text-content hover:underline"
      >
        ← All projects
      </Link>

      {/* Hero banner */}
      <div className="relative mt-8 aspect-[21/9] overflow-hidden border border-hairline bg-surface-alt">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} — hero`}
            fill
            priority
            sizes="(max-width: 1088px) 100vw, 1088px"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col justify-end p-8">
            <p className="eyebrow text-muted">Case file — {project.slug}</p>
            <p className="mt-3 font-mono text-sm text-muted">
              Screenshots pending. The record below is complete.
            </p>
          </div>
        )}
      </div>

      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h1>
          <Stamp label={project.status} />
        </div>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">{project.hook}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li key={t} className="tag-chip">
              {t}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-10">
        <StatRow stats={project.stats} />
      </div>

      <Section title="Role">
        <p>{project.role}</p>
      </Section>

      <Section title="Problem">
        <p>{project.problem}</p>
      </Section>

      <Section title="Approach">
        <ul className="space-y-4">
          {project.approach.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-stamp-green" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {project.images.length > 0 ? (
        <div className="mt-14 space-y-10">
          {project.images.map((img, i) =>
            img.src ? (
              <figure key={i}>
                <div className="relative aspect-[16/9] overflow-hidden border border-hairline bg-surface-alt">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 1088px) 100vw, 1088px"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] leading-relaxed text-muted">
                  {img.caption}
                </figcaption>
              </figure>
            ) : (
              // Pending frame — the caption is written, the asset isn't in yet.
              <figure key={i}>
                <div className="flex aspect-[16/9] items-center justify-center border border-dashed border-hairline bg-surface-alt">
                  <span className="eyebrow text-muted">Screenshot pending</span>
                </div>
                <figcaption className="mt-3 text-[13px] leading-relaxed text-muted">
                  {img.caption}
                </figcaption>
              </figure>
            )
          )}
        </div>
      ) : null}

      <Section title="Outcome">
        <p>{project.outcome}</p>
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 max-w-prose">
      <h2 className="eyebrow text-muted">{title}</h2>
      <div className="mt-4 text-[15px] leading-relaxed text-content/90">{children}</div>
    </section>
  );
}
