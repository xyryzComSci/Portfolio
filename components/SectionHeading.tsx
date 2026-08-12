export default function SectionHeading({
  label,
  title,
  note,
  dark = false,
}: {
  label: string;
  title: string;
  note?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10">
      <p className={`eyebrow ${dark ? "text-paper/50" : "text-muted"}`}>{label}</p>
      <h2
        className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${
          dark ? "text-paper" : "text-content"
        }`}
      >
        {title}
      </h2>
      {note ? (
        <p className={`mt-3 max-w-prose text-sm ${dark ? "text-paper/60" : "text-muted"}`}>{note}</p>
      ) : null}
    </div>
  );
}
