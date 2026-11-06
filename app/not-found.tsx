import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Hatch } from "@/components/section-heading";

export default function NotFound() {
  return (
    <main id="top">
      <div className="row">
        <div className="container">
          <div className="not-found">
            <span className="page-kicker">404</span>
            <h1>LOST</h1>
            <p>
              This page does not exist. The work, however, is still one click
              away.
            </p>
            <Link className="btn" href="/">
              Back to portfolio <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <Hatch />
    </main>
  );
}
