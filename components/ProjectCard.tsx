import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import Stamp from "./Stamp";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col border border-hairline bg-surface">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-hairline bg-surface-alt">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} — screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        ) : (
          // No screenshot yet: a typographic plate, not a gradient placeholder.
          <div className="flex h-full flex-col justify-end p-5">
            <p className="eyebrow text-muted">Case file</p>
            <p className="mt-2 font-mono text-lg text-content">{project.slug.toUpperCase()}</p>
          </div>
        )}
        <Stamp label={project.status} className="absolute right-3 top-3" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted">{project.hook}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((t) => (
            <li key={t} className="tag-chip">
              {t}
            </li>
          ))}
        </ul>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex font-mono text-[12px] text-content underline-offset-4 group-hover:underline"
        >
          Case study →
        </Link>
      </div>
    </article>
  );
}
