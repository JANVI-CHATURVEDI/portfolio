import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GitHubIcon } from "@/components/icons";
import { Hatch } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";
import { githubUrl, projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Civic tech, developer tools and full-stack products built by Janvi Chaturvedi.",
};

export default function ProjectsPage() {
  const more = (
    <a
      className="project-card more-card"
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span className="more-mark" aria-hidden="true">
        <GitHubIcon width={32} height={32} />
      </span>
      <h3 className="project-title">More on GitHub</h3>
      <p className="project-description">
        Experiments, open-source patches and work in progress.
      </p>
      <small className="project-more">
        Visit profile <ArrowUpRight width={14} height={14} />
      </small>
    </a>
  );

  return (
    <main id="top">
      <div className="row">
        <div className="container flush">
          <div className="page-banner">
            <span className="page-kicker">Selected work</span>
            <h1>PROJECTS</h1>
          </div>
        </div>
      </div>

      <Hatch />

      <div className="row">
        <div className="container">
          <div className="page-intro">
            <p>
              {projects.length} products and experiments — civic platforms,
              developer tools and interfaces built end to end. Each one shipped
              or still in the workshop.
            </p>
            <Link href="/">
              <ArrowLeft width={15} height={15} /> Back home
            </Link>
          </div>
        </div>
      </div>

      <Hatch />

      <div className="row">
        <div className="container flush">
          <ProjectGrid items={projects} trailing={more} />
        </div>
      </div>

      <Hatch />
    </main>
  );
}
