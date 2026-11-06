import { githubUrl, portfolio } from "@/lib/portfolio";
import {
  BoltIcon,
  ClockIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";
import { LiveClock } from "@/components/live-clock";

export function Overview() {
  return (
    <div className="overview">
      <div>
        <div className="info-line">
          <span className="info-icon" aria-hidden="true">
            <MapPinIcon />
          </span>
          {portfolio.location}
        </div>
        <a className="info-line" href={`mailto:${portfolio.email}`}>
          <span className="info-icon" aria-hidden="true">
            <MailIcon />
          </span>
          {portfolio.email}
        </a>
        <div className="info-line">
          <span className="info-icon" aria-hidden="true">
            <BoltIcon />
          </span>
          {portfolio.status}
        </div>
      </div>
      <div>
        <div className="info-line">
          <span className="info-icon" aria-hidden="true">
            <ClockIcon />
          </span>
          <LiveClock />
        </div>
        <a
          className="info-line"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="info-icon" aria-hidden="true">
            <LinkIcon />
          </span>
          github.com/JANVI-CHATURVEDI
        </a>
      </div>
    </div>
  );
}
