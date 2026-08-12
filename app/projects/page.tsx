import type { Metadata } from "next";
import { projects, smallBuilds } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import Stamp from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work — automation and full-stack systems built end-to-end.",
};

export default function ProjectsPage() {
  return (
    <div className="shell py-16 sm:py-20">
      <SectionHeading
        label="Projects"
        title="Selected work"
        note="Three flagship systems with full case studies, plus smaller builds at various stages."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-20">
        <p className="eyebrow text-muted">Small builds</p>
        <h2 className="mt-3 text-xl font-bold tracking-tight">
          Prototypes, concepts, and things in the queue
        </h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {smallBuilds.map((b) => (
            <li key={b.title} className="border border-hairline p-5">
              <Stamp label={b.status} />
              <h3 className="mt-4 text-[15px] font-bold tracking-tight">{b.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{b.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
