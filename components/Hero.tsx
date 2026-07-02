"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/useInView";
import Counter from "@/components/Counter";

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const el = portraitRef.current;
      if (!el) return;
      const y = window.scrollY;
      if (y < 900) el.style.transform = `translateY(${y * 0.06}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-sub">
            Corporate Strategy <span className="x">×</span> Brand Storytelling{" "}
            <span className="x">×</span> Social Media Strategy
          </p>
          <h1>
            <span className="line">
              <span>Hi, I&apos;m</span>
            </span>
            <span className="line">
              <span>
                <em>Janin.</em>
              </span>
            </span>
          </h1>
          <p className="hero-copy">
            I help organisations transform business strategy into compelling
            digital stories that engage audiences and deliver measurable
            impact.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary">
              View my work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="hero-note">
            <div>
              <strong>
                <Counter to={8} />+
              </strong>
              years in strategy
            </div>
            <div>
              <strong>PhD</strong>in Marketing
            </div>
            <div>
              <strong>
                <Counter to={10} />+
              </strong>
              transformation programs
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait" ref={portraitRef}>
            <div className="portrait-label">
              <span className="initial">J.</span>
              <span className="mono">Professional portrait</span>
            </div>
          </div>
          <div className="float-card fc-1">
            <div className="k">+312%</div>
            <div className="l">Avg. engagement lift</div>
          </div>
          <div className="float-card fc-2">
            <div className="k">4.8×</div>
            <div className="l">Campaign ROI</div>
          </div>
          <div className="float-card fc-3">
            <div className="k">450+</div>
            <div className="l">Research citations</div>
          </div>
        </div>
      </div>
    </header>
  );
}
