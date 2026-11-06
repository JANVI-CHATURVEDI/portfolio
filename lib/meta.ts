import type { Project } from "@/lib/portfolio";

export const stackMeta: Record<
  string,
  { short: string; color: string; ink?: string }
> = {
  React: { short: "Re", color: "#087ea4" },
  JavaScript: { short: "JS", color: "#f7df1e", ink: "#09090b" },
  "HTML5 / CSS3": { short: "H5", color: "#c2410c" },
  "Tailwind CSS": { short: "Tw", color: "#0e7490" },
  Python: { short: "Py", color: "#3776ab" },
  Django: { short: "Dj", color: "#0c4b33" },
  PostgreSQL: { short: "Pg", color: "#4169e1" },
  SQLite: { short: "Sq", color: "#003b57" },
  Firebase: { short: "Fb", color: "#ffca28", ink: "#09090b" },
  Figma: { short: "Fg", color: "#7c3aed" },
  "Git / GitHub": { short: "Gt", color: "#b91c1c" },
  "Leaflet.js": { short: "Lf", color: "#15803d" },
  Bootstrap: { short: "Bs", color: "#7952b3" },
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function projectBadge(project: Project) {
  if (project.status === "featured")
    return { label: "Featured", tone: "live" };
  if (project.link) return { label: "Live", tone: "live" };
  if (project.status === "in-progress")
    return { label: "In progress", tone: "progress" };
  return { label: "Source", tone: "source" };
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
