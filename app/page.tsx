import Link from "next/link";
import { About } from "@/components/about";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContributionHeatmap } from "@/components/heatmap";
import {
  ArrowRight,
  ArrowUpRight,
  VerifiedIcon,
} from "@/components/icons";
import { Overview } from "@/components/overview";
import { ProjectGrid } from "@/components/project-grid";
import { QuoteSection } from "@/components/quote-section";
import { Hatch, SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { Stack } from "@/components/stack";
import { Tagline } from "@/components/tagline";
import { education, portfolio, projects } from "@/lib/portfolio";
import { initials } from "@/lib/meta";

export default function HomePage() {
  return (
    <main id="top">
      <section className="row" aria-label="Introduction">
        <div className="container flush">
          <div className="banner">
            <h1>JANVI</h1>
          </div>
        </div>
      </section>

      <section className="row" aria-label="Profile">
        <div className="container flush">
          <div className="identity">
            <div className="avatar">
              <div className="avatar-mark">{initials(portfolio.name)}</div>
            </div>
            <div className="identity-body">
              <div className="eyebrow">{portfolio.title}</div>
              <div className="name">
                {portfolio.name}
                <VerifiedIcon />
              </div>
              <Tagline />
            </div>
          </div>
        </div>
      </section>

      <Hatch />

      <section className="row">
        <div className="container flush">
          <Overview />
        </div>
      </section>

      <Hatch />

      <section className="row">
        <div className="container flush">
          <SocialLinks />
        </div>
      </section>

      <Hatch />

      <SectionHeading id="about" title="About" />
      <About />

      <Hatch />

      <ContributionHeatmap />

      <Hatch />

      <SectionHeading id="stack" title="Stack" />
      <Stack />

      <Hatch />

      <SectionHeading id="projects" title="Projects" count={projects.length} />
      <section className="row">
        <div className="container flush">
          <ProjectGrid items={projects.slice(0, 4)} />
        </div>
      </section>
      <div className="row cta-row">
        <Link className="btn" href="/projects">
          All Projects <ArrowRight />
        </Link>
      </div>

      <Hatch />

      <SectionHeading id="experience" title="Experience" />
      <ExperienceSection />
      <div className="row cta-row">
        <a
          className="btn"
          href={portfolio.resume}
          target="_blank"
          rel="noreferrer"
        >
          View Resume <ArrowUpRight />
        </a>
      </div>

      <Hatch />

      <SectionHeading id="education" title="Education" count={education.length} />
      <EducationSection />

      <Hatch />

      <QuoteSection />

      <Hatch />
    </main>
  );
}
