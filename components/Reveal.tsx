"use client";

import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "figure";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const { ref, inView } = useInView<HTMLElement>();
  const classes = [
    "reveal",
    delay ? `reveal-d${delay}` : "",
    inView ? "in" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={classes}>
      {children}
    </Tag>
  );
}
