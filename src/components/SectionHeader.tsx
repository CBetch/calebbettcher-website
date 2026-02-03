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
      <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-fg">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm md:text-base text-muted max-w-2xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
