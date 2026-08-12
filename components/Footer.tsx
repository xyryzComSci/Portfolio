import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="shell flex flex-col gap-3 py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
          {site.name} — {site.region}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} className="hover:text-content">
            Email
          </a>
          <Link href="/contact" className="hover:text-content">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
