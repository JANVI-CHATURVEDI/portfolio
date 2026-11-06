import type { ReactNode } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/portfolio";

type ProjectGridProps = {
  items: Project[];
  trailing?: ReactNode;
};

export function ProjectGrid({ items, trailing }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <div className="project-cell" key={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
      {trailing && <div className="project-cell">{trailing}</div>}
    </div>
  );
}
