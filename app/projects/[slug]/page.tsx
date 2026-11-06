import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckIcon,
  GitHubIcon,
} from "@/components/icons";
import { Hatch } from "@/components/section-heading";
import { projectBadge, slugify } from "@/lib/meta";
import { projects } from "@/lib/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const findProject = (slug: string) =>
  projects.find((project) => slugify(project.name) === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: slugify(project.name) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) notFound();

  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const badge = projectBadge(project);

  return (
    <main id="top">
      <div className="row">
        <div className="container flush">
          <div
            className="project-hero"
            style={{ background: project.image }}
          >
            <div>
              <span className="project-hero-kicker">
                {project.year} · {project.role}
              </span>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container flush">
          <div className="detail-meta">
            <div className="detail-cell">
              <span className="detail-label">Status</span>
              <span className="detail-value">{badge.label}</span>
            </div>
            <div className="detail-cell">
              <span className="detail-label">Year</span>
              <span className="detail-value">{project.year ?? "—"}</span>
            </div>
            <div className="detail-cell">
              <span className="detail-label">Role</span>
              <span className="detail-value">{project.role ?? "Developer"}</span>
            </div>
            <div className="detail-cell">
              <span className="detail-label">Stack</span>
              <span className="detail-value">
                {project.tags.length} tools
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container flush">
          <div className="detail-section">
            <h2 className="inner-title">Overview</h2>
            <p className="detail-copy">
              {project.longDescription ?? project.description}
            </p>
            <div className="detail-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {project.features && (
        <div className="row">
          <div className="container flush">
            <div className="detail-section">
              <h2 className="inner-title">What it does</h2>
              <ul className="feature-grid">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <div className="container flush">
          <div className="detail-section">
            <h2 className="inner-title">Links</h2>
            <div className="detail-actions">
              {project.link && (
                <a
                  className="btn"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site <ArrowUpRight />
                </a>
              )}
              {project.github && (
                <a
                  className="btn btn-ghost"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon width={17} height={17} /> Source code
                </a>
              )}
              <Link className="btn btn-ghost" href="/projects">
                <ArrowLeft width={15} height={15} /> All projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container flush">
          <nav className="project-nav" aria-label="Project pagination">
            <Link href={`/projects/${slugify(previous.name)}`}>
              <small>Previous project</small>
              <b>{previous.name}</b>
            </Link>
            <Link href={`/projects/${slugify(next.name)}`}>
              <small>Next project</small>
              <b>{next.name}</b>
            </Link>
          </nav>
        </div>
      </div>

      <Hatch />
    </main>
  );
}
