"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  // Start at the final value so SSR / no-JS viewers (and search engines) see
  // the real numbers; animate up from 0 once scrolled into view.
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!inView) return;
    const step = Math.max(1, Math.round(target / 40));
    let current = 0;
    setValue(0);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setValue(current);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
