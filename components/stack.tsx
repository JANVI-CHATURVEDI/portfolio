import { skillMatrix } from "@/lib/portfolio";
import { stackMeta } from "@/lib/meta";

const skills = skillMatrix.flatMap((category) => category.skills);

export function Stack() {
  return (
    <div className="row">
      <div className="container flush">
        <div className="stack">
          {skills.map((skill) => {
            const meta = stackMeta[skill.name];

            return (
              <span
                key={skill.name}
                className="stack-tile"
                style={{
                  background: meta?.color ?? "var(--tile)",
                  color: meta?.ink ?? "#fff",
                }}
                title={`${skill.name} · ${skill.level}%`}
              >
                {meta?.short ?? skill.name.slice(0, 2)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
