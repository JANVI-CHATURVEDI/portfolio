import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { projectBadge, slugify } from "@/lib/meta";
import type { Project } from "@/lib/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const badge = projectBadge(project);

  return (
    <Link className="project-card" href={`/projects/${slugify(project.name)}`}>
      <div
        className="project-preview"
        style={{
          background:
            project.image ?? "linear-gradient(135deg,#18181b,#3f3f46)",
        }}
        aria-hidden="true"
      >
        {project.name}
      </div>
      <h3 className="project-title">
        {project.name}
        <span className={`status status-${badge.tone}`}>{badge.label}</span>
      </h3>
      <p className="project-description">{project.description}</p>
      <small className="project-more">
        View Project <ArrowUpRight width={14} height={14} />
      </small>
    </Link>
  );
}
