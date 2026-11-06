import { education } from "@/lib/portfolio";

export function EducationSection() {
  return (
    <div className="row">
      <div className="container flush">
        <div className="education-list">
          {education.map((entry) => (
            <div className="edu-item" key={entry.degree}>
              <div className="edu-degree">
                {entry.current && <span className="edu-dot" aria-hidden="true" />}
                {entry.degree}
              </div>
              <span className="edu-institution">{entry.institution}</span>
              <div className="edu-meta">
                {entry.period}{" "}
                <span>{entry.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
