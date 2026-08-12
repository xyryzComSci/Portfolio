import type { Metadata } from "next";
import { posts } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import Stamp from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Notes on automation, agentic development, and delivery.",
};

export default function BlogPage() {
  return (
    <div className="shell py-16 sm:py-20">
      <SectionHeading
        label="Blog"
        title="Field notes"
        note="Write-ups from work that's already shipped — posted when there are real numbers to report."
      />

      <ul className="max-w-prose divide-y divide-hairline border-y border-hairline">
        {posts.map((post) => (
          <li key={post.title} className="py-7">
            <Stamp label={post.status} tone="slate" />
            <h2 className="mt-4 text-lg font-bold leading-snug tracking-tight">{post.title}</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
