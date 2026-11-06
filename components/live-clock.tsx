"use client";

import { useEffect, useState } from "react";

const timeZone = "Asia/Kolkata";

export function LiveClock() {
  const [time, setTime] = useState("");
  const [sameTime, setSameTime] = useState(true);

  useEffect(() => {
    const read = () => {
      const now = new Date();
      const local = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone,
      });
      const here = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(local);
      setSameTime(local === here);
    };

    read();
    const timer = setInterval(read, 20000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      <span suppressHydrationWarning>{time || "--:--"}</span>{" "}
      <em>
        {"// "}
        {time ? (sameTime ? "same time" : "their time") : "IST"}
      </em>
    </span>
  );
}
