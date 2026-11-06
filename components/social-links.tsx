import {
  ArrowUpRight,
  FileTextIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "@/components/icons";
import { socials, type SocialLink } from "@/lib/portfolio";

function glyph(icon?: string) {
  switch (icon) {
    case "github":
      return <GitHubIcon width={26} height={26} />;
    case "linkedin":
      return <LinkedInIcon width={24} height={24} />;
    case "x":
      return <XIcon width={22} height={22} />;
    case "instagram":
      return <InstagramIcon width={25} height={25} />;
    case "mail":
      return <MailIcon width={24} height={24} />;
    case "resume":
      return <FileTextIcon width={24} height={24} />;
    default:
      return <ArrowUpRight width={22} height={22} />;
  }
}

function SocialLinkItem({ link }: { link: SocialLink }) {
  const external = !link.url.startsWith("mailto:");

  return (
    <a
      className="social-link"
      href={link.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span
        className="social-tile"
        style={{ background: link.color }}
        aria-hidden="true"
      >
        {glyph(link.icon)}
      </span>
      <span className="social-text">
        <b>{link.label}</b>
        <span>{link.handle}</span>
      </span>
      <ArrowUpRight className="social-arrow" />
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="social-grid">
      {socials.map((link) => (
        <SocialLinkItem key={link.label} link={link} />
      ))}
    </div>
  );
}
