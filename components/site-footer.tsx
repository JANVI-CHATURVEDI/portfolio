import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { githubUrl, socials } from "@/lib/portfolio";

const linkFor = (label: string) => socials.find((item) => item.label === label);

export function SiteFooter() {
  const github = linkFor("GitHub");
  const linkedin = linkFor("LinkedIn");
  const twitter = linkFor("X / Twitter");

  return (
    <footer className="row">
      <div className="container flush">
        <div className="site-footer">
          <a
            href={github?.url ?? githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon width={20} height={20} />
          </a>
          <a
            href={linkedin?.url ?? "https://linkedin.com/in/janvi1010"}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon width={19} height={19} />
          </a>
          <a
            href={twitter?.url ?? "https://x.com/janvi_0x"}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <XIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
