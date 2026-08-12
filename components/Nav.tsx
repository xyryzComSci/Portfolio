"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-surface/90 backdrop-blur">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight">
          {site.wordmark}
        </Link>

        <nav className="flex items-center gap-1 sm:gap-4">
          {nav.slice(1).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-1 text-[13px] transition-colors ${
                  active ? "text-content" : "text-muted hover:text-content"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
