export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-[0.25em] text-muted">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-fg leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}