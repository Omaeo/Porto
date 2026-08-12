type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 border-b border-line pb-8 md:grid-cols-[1fr_2fr] md:items-end">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
        <span aria-hidden="true">{"// "}</span>
        {eyebrow}
      </p>
      <div>
        <h2 className="max-w-3xl font-mono text-3xl font-semibold uppercase leading-[1.05] tracking-[-0.06em] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
