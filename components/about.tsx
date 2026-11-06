import Link from "next/link";
import { githubUrl, portfolio } from "@/lib/portfolio";

export function About() {
  return (
    <div className="row">
      <div className="container flush">
        <ul className="about-list">
          <li>
            <b>{portfolio.title}</b> building digital products from the first
            schema to the last pixel.
          </li>
          <li>
            Most at home in <b>Python</b>, <b>Django</b>, <b>React</b> and{" "}
            <b>PostgreSQL</b>, with an eye for interfaces that stay out of the
            way.
          </li>
          <li>
            Currently a Software Developer Intern at{" "}
            <a href="#experience">Ayursh</a>, wiring Razorpay and Delhivery into
            production workflows.
          </li>
          <li>
            Studying <b>BCA</b> at Dr. Virendra Swarup Institute of Computer
            Studies, Kanpur — class of 2027.
          </li>
          <li>
            Contributing to open source (<b>Zulip</b>, <b>CircuitVerse</b>,{" "}
            <b>wger</b>) and building civic tools like{" "}
            <Link href="/projects/swachdrishti">SwachDrishti</Link>.
          </li>
          <li>
            More experiments live on{" "}
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}
