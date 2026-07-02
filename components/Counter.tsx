"use client";

import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "@/hooks/useInView";

export default function Counter({
  to,
  duration = 1600,
}: {
  to: number;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to, duration]);

  return <span ref={ref}>{value}</span>;
}
