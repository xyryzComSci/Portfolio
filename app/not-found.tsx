import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell py-24">
      <p className="eyebrow text-muted">404</p>
      <h1 className="mt-3 text-2xl font-bold tracking-tight">No such case file.</h1>
      <Link
        href="/"
        className="mt-6 inline-flex font-mono text-[12px] underline underline-offset-4"
      >
        ← Back home
      </Link>
    </div>
  );
}
