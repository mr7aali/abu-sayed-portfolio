type SectionHeadingProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  copy?: string;
};

export function SectionHeading({
  id,
  title,
  eyebrow,
  copy,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center" id={id}>
      {eyebrow ? (
        <span className="inline-flex h-7 items-center rounded-lg border border-primary/15 bg-white px-3 text-xs font-bold uppercase tracking-normal text-primary shadow-sm">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground">{copy}</p>
      ) : null}
    </div>
  );
}
