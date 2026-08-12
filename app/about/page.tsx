import type { Metadata } from "next";
import Image from "next/image";
import { aboutIntro, expertise, skills } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Computer Science graduate building automation systems and full-stack applications.",
};

export default function AboutPage() {
  return (
    <div className="shell py-16 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:gap-16">
        <div className="max-w-prose">
          <p className="eyebrow text-muted">About</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Background</h1>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-content/90">
            {aboutIntro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>
              Based in {site.hometown}, Philippines, working remotely. I&apos;m open to automation,
              backend, or full-stack work.
            </p>
          </div>
        </div>

        <div className="lg:pt-14">
          <div className="relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden border border-hairline bg-surface-alt">
            <Image
              src={site.headshot}
              alt={site.name}
              fill
              sizes="288px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mt-20">
        <p className="eyebrow text-muted">Expertise</p>
        <h2 className="mt-3 text-xl font-bold tracking-tight">What I do</h2>

        <div className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {expertise.map((item) => (
            <article key={item.title}>
              <div className="flex items-start justify-between gap-6 border-b border-hairline pb-3">
                <h3 className="text-[15px] font-bold tracking-tight">{item.title}</h3>
                <p className="max-w-[13rem] text-right font-mono text-[11px] leading-snug text-muted">
                  {item.stat}
                </p>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">{item.body}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <li key={t} className="tag-chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <p className="eyebrow text-muted">Skills</p>
        <h2 className="mt-3 text-xl font-bold tracking-tight">Tools and stack</h2>

        <dl className="mt-8 divide-y divide-hairline border-y border-hairline">
          {skills.map((group) => (
            <div key={group.group} className="grid gap-3 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="eyebrow pt-1 text-muted">{group.group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((s) => (
                    <li key={s} className="tag-chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Education */}
      <section className="mt-20 max-w-prose">
        <p className="eyebrow text-muted">Education</p>
        <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-hairline pb-3">
          <h3 className="text-[15px] font-bold tracking-tight">BS in Computer Science</h3>
          <p className="font-mono text-[11px] text-muted">{site.educationYears}</p>
        </div>
        <p className="mt-3 text-[14px] text-muted">
          Visayas State University · Baybay City, Philippines
        </p>
      </section>
    </div>
  );
}
