"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, EyeIcon } from "@/components/icons";
import { CommandPalette } from "@/components/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const onProjects = pathname.startsWith("/projects");

  return (
    <header className="row site-header">
      <div className="container">
        <div className="bar">
          <Link className="logo" href="/" aria-label="Janvi Chaturvedi, home">
            JANVI
          </Link>
          <span className="pill pill-version" aria-hidden="true">
            v2
            <ChevronDown width={12} height={12} />
          </span>
          <nav className="main-nav" aria-label="Primary">
            <Link
              href="/"
              className={pathname === "/" ? "active" : undefined}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Portfolio
            </Link>
            <Link
              href="/#projects"
              className={onProjects ? "active" : undefined}
              aria-current={onProjects ? "page" : undefined}
            >
              Projects
            </Link>
            <Link href="/#experience">Experience</Link>
          </nav>
          <CommandPalette />
          <span className="pill pill-version" aria-hidden="true">
            <EyeIcon />
            1K
          </span>
          <span className="vr" aria-hidden="true" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
