import Reveal from "@/components/Reveal";

const SERVICES: { num: string; title: string; text: string; delay: 0 | 1 | 2 | 3 }[] = [
  { num: "S.01", title: "Social media strategy", text: "A complete, research-backed strategy: positioning, channels, content pillars, and the measurement plan to match.", delay: 0 },
  { num: "S.02", title: "Brand strategy", text: "Positioning, voice, and narrative architecture that give every channel a coherent story to tell.", delay: 1 },
  { num: "S.03", title: "Content planning", text: "Editorial calendars built on audience insight — what to say, where, and why it will land.", delay: 2 },
  { num: "S.04", title: "Campaign development", text: "Full campaign builds from insight to launch: concept, creative direction, execution, and reporting.", delay: 3 },
  { num: "S.05", title: "Personal branding", text: "Executive and founder positioning — turning expertise into visible, credible thought leadership.", delay: 0 },
  { num: "S.06", title: "Marketing consulting", text: "Senior strategic counsel for teams that need direction, structure, or a second set of expert eyes.", delay: 1 },
  { num: "S.07", title: "Workshops & training", text: "Practical, university-grade workshops that upskill your team in strategy, content, and analytics.", delay: 2 },
  { num: "S.08", title: "Market research", text: "Audience studies, competitive analysis, and social listening with academic rigour and commercial focus.", delay: 3 },
];

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Services</p>
            <h2>
              Ways we can <em>work together.</em>
            </h2>
          </div>
          <p>
            From a single strategy sprint to a full campaign build —
            engagements shaped around your goal, not a package.
          </p>
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <Reveal className="svc" delay={s.delay} key={s.num}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
