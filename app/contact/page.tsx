import type { Metadata } from "next";
import { site } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="shell py-16 sm:py-20">
      <div className="max-w-prose">
        <SectionHeading
          label="Contact"
          title="Get in touch"
          note="Open to automation, backend, or full-stack work."
        />

        <dl className="divide-y divide-hairline border-y border-hairline">
          <Row label="Email">
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>
          </Row>

          <Row label="GitHub">
            {site.githubReady ? (
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-4"
              >
                {site.github.replace(/^https?:\/\//, "")}
              </a>
            ) : (
              <span className="text-muted">Coming soon</span>
            )}
          </Row>

          <Row label="LinkedIn">
            {/* Deliberately plain text, not an anchor — keeps it out of reach of
                casual link scrapers reading the DOM. Still selectable. */}
            <span className="select-all font-mono text-[13px]">{site.linkedinText}</span>
          </Row>
        </dl>

        <p className="mt-6 text-[13px] text-muted">Usually replies within a day.</p>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <dt className="eyebrow pt-1 text-muted">{label}</dt>
      <dd className="text-[14px]">{children}</dd>
    </div>
  );
}
