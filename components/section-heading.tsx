type SectionHeadingProps = {
  title: string;
  count?: number;
  id?: string;
};

export function SectionHeading({ title, count, id }: SectionHeadingProps) {
  return (
    <section className="row" id={id}>
      <div className="container">
        <h2 className="section-title">
          {title}
          {typeof count === "number" && <sup>({count})</sup>}
        </h2>
      </div>
    </section>
  );
}

export function Hatch() {
  return <div className="row hatch" aria-hidden="true" />;
}
