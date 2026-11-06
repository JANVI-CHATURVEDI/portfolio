import { githubUrl } from "@/lib/portfolio";

const levels = (() => {
  let seed = 2026;
  return Array.from({ length: 53 * 7 }, () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const value = seed / 4294967296;
    if (value < 0.5) return 0;
    if (value < 0.7) return 1;
    if (value < 0.84) return 2;
    if (value < 0.94) return 3;
    return 4;
  });
})();

const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
const today = new Date();
const months = Array.from({ length: 12 }, (_, index) =>
  monthFormatter.format(
    new Date(today.getFullYear(), today.getMonth() - 11 + index, 1),
  ),
);

export function ContributionHeatmap() {
  return (
    <div className="row">
      <div className="container flush">
        <div className="heat">
          <div className="heat-months" aria-hidden="true">
            {months.map((month, index) => (
              <span key={`${month}-${index}`}>{month}</span>
            ))}
          </div>
          <div
            className="heat-cells"
            role="img"
            aria-label="Contribution activity over the last year"
          >
            {levels.map((level, index) => (
              <i
                key={index}
                data-level={level}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <div className="heat-footer">
          <span>
            6+ merged pull requests on{" "}
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </span>
          <span className="legend" aria-hidden="true">
            Less
            <i style={{ background: "var(--tile)" }} />
            <i style={{ background: "var(--heat-2)" }} />
            <i style={{ background: "var(--heat-3)" }} />
            <i style={{ background: "var(--heat-4)" }} />
            More
          </span>
        </div>
      </div>
    </div>
  );
}
