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
    <div className="section-heading" id={id}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="section-title-row">
        <span aria-hidden="true" />
        <h2>{title}</h2>
        <span aria-hidden="true" />
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
