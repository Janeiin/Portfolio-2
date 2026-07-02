"use client";

import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { useInView } from "@/hooks/useInView";

const KPIS: {
  label: string;
  delta: string;
  to: number;
  suffix: string;
  prefix?: string;
  delay: 0 | 1 | 2 | 3;
}[] = [
  { label: "Engagement rate", delta: "▲ 2.1pts", to: 8, suffix: ".4%", delay: 0 },
  { label: "Reach", delta: "▲ 38%", to: 4, suffix: ".6M", delay: 1 },
  { label: "Impressions", delta: "▲ 44%", to: 12, suffix: ".8M", delay: 2 },
  { label: "Website traffic", delta: "▲ 91%", to: 212, suffix: "k", delay: 3 },
  { label: "Click-through rate", delta: "▲ 0.8pts", to: 3, suffix: ".4%", delay: 0 },
  { label: "Follower growth", delta: "▲ YoY", to: 126, suffix: "%", prefix: "+", delay: 1 },
  { label: "Conversion rate", delta: "▲ 1.2pts", to: 4, suffix: ".7%", delay: 2 },
  { label: "Video views", delta: "▲ 3.2×", to: 6, suffix: ".1M", delay: 3 },
];

const BARS = [
  { h: "42%", l: "C1" },
  { h: "58%", l: "C2" },
  { h: "49%", l: "C3" },
  { h: "72%", l: "C4" },
  { h: "66%", l: "C5" },
  { h: "92%", l: "C6" },
];

function LineChart() {
  const { ref, inView } = useInView<SVGSVGElement>(0.3);
  return (
    <svg
      ref={ref}
      className={`chart-line${inView ? " in" : ""}`}
      viewBox="0 0 560 210"
      width="100%"
      height="auto"
      role="img"
      aria-label="Line chart of follower growth over twelve months"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B14D5C" stopOpacity=".22" />
          <stop offset="100%" stopColor="#B14D5C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#282223" strokeWidth="1">
        <line x1="0" y1="50" x2="560" y2="50" />
        <line x1="0" y1="100" x2="560" y2="100" />
        <line x1="0" y1="150" x2="560" y2="150" />
      </g>
      <path
        className="area"
        d="M0,185 C60,178 90,168 140,158 C190,148 220,150 270,132 C320,114 350,120 400,92 C450,64 490,58 560,34 L560,210 L0,210 Z"
      />
      <path
        className="stroke"
        d="M0,185 C60,178 90,168 140,158 C190,148 220,150 270,132 C320,114 350,120 400,92 C450,64 490,58 560,34"
      />
    </svg>
  );
}

function BarChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div
      ref={ref}
      className="bars"
      role="img"
      aria-label="Bar chart of campaign return on investment"
    >
      {BARS.map((b) => (
        <div className="bar" key={b.l}>
          <i style={{ height: inView ? b.h : 0 }} />
          <span>{b.l}</span>
        </div>
      ))}
    </div>
  );
}

function Donut({ pct }: { pct: number }) {
  const { ref, inView } = useInView<SVGSVGElement>(0.3);
  const circumference = 2 * Math.PI * 60;
  return (
    <svg
      ref={ref}
      className="donut"
      width="150"
      height="150"
      viewBox="0 0 150 150"
      role="img"
      aria-label={`Donut chart showing ${pct} percent of sessions from organic social`}
    >
      <circle className="track" cx="75" cy="75" r="60" />
      <circle
        className="val"
        cx="75"
        cy="75"
        r="60"
        style={{
          strokeDasharray: inView
            ? `${(circumference * pct) / 100} ${circumference}`
            : `0 999`,
        }}
      />
      <text
        x="75"
        y="78"
        transform="rotate(90 75 75)"
        textAnchor="middle"
        fontFamily="var(--utility)"
        fontSize="24"
        fontWeight="600"
        fill="#F2EFEC"
      >
        {pct}%
      </text>
    </svg>
  );
}

export default function Dashboard() {
  return (
    <section className="section section-alt" id="results">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Analytics</p>
            <h2>
              Because strategy <em>should show up in the numbers.</em>
            </h2>
          </div>
          <p>
            A representative performance snapshot across recent client work.
            Every campaign ships with a dashboard like this.
          </p>
        </Reveal>

        <div className="dash-kpis">
          {KPIS.map((k) => (
            <Reveal className="kpi" delay={k.delay} key={k.label}>
              <div className="l">
                {k.label} <span className="delta">{k.delta}</span>
              </div>
              <div className="n">
                {k.prefix}
                <Counter to={k.to} />
                <span className="suffix">{k.suffix}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="dash-charts">
          <Reveal className="chart-card">
            <h4>Follower growth</h4>
            <p className="sub">Rolling 12 months, all client accounts combined</p>
            <LineChart />
          </Reveal>
          <Reveal className="chart-card" delay={1}>
            <h4>Campaign ROI</h4>
            <p className="sub">Return by campaign, last six launches</p>
            <BarChart />
          </Reveal>
          <Reveal className="chart-card">
            <h4>Traffic sources</h4>
            <p className="sub">Share of website sessions from social</p>
            <div className="donut-wrap">
              <Donut pct={68} />
              <div className="donut-legend">
                <div>
                  <i style={{ background: "#B14D5C" }} />
                  Organic social — 68%
                </div>
                <div>
                  <i style={{ background: "#6E0F1F" }} />
                  Paid social — 22%
                </div>
                <div>
                  <i style={{ background: "#3A3335" }} />
                  Referral &amp; other — 10%
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="chart-card" delay={1}>
            <h4>What this means</h4>
            <p className="sub">Reading the numbers, not just reporting them</p>
            <p style={{ fontSize: ".95rem", color: "var(--ink-soft)" }}>
              Vanity metrics are easy. The dashboards I build connect social
              performance to the outcomes leadership actually tracks —
              enquiries, applications, revenue. If a metric doesn&apos;t inform
              a decision, it doesn&apos;t make the report.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
