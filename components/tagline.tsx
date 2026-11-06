"use client";

import { useEffect, useState } from "react";
import { heroTaglines } from "@/lib/portfolio";

export function Tagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let fade: ReturnType<typeof setTimeout> | undefined;
    const cycle = setInterval(() => {
      setVisible(false);
      fade = setTimeout(() => {
        setIndex((current) => (current + 1) % heroTaglines.length);
        setVisible(true);
      }, 300);
    }, 3500);

    return () => {
      clearInterval(cycle);
      if (fade) clearTimeout(fade);
    };
  }, []);

  const line = heroTaglines[index];

  return (
    <div>
      <span className="tagline" style={{ opacity: visible ? 1 : 0 }}>
        {line.top} <span className="tagline-accent">{line.accent}</span>
      </span>
    </div>
  );
}
