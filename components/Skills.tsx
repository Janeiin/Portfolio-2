import Reveal from "@/components/Reveal";

const GROUPS: {
  role: string;
  title: string;
  icon: React.ReactNode;
  tags: string[];
  delay: 0 | 1 | 2 | 3;
}[] = [
  {
    role: "Direction",
    title: "Strategy",
    delay: 0,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    tags: ["Corporate Strategy", "Brand Strategy", "Social Media Strategy", "Content Strategy", "Campaign Planning"],
  },
  {
    role: "Evidence",
    title: "Research",
    delay: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
    tags: ["Audience Research", "Market Research", "Consumer Insight", "Competitive Analysis", "Academic Rigour"],
  },
  {
    role: "Craft",
    title: "Creative",
    delay: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      </svg>
    ),
    tags: ["Storytelling", "Copywriting", "Video Strategy", "Graphic Design", "Community Engagement", "SEO"],
  },
  {
    role: "Proof",
    title: "Analytics & tools",
    delay: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
    tags: ["Google Analytics", "Meta Business Suite", "Hootsuite", "Buffer", "Sprout Social", "Adobe Creative Suite", "Canva", "AI Tools"],
  },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Skills &amp; expertise</p>
            <h2>
              One practice, <em>four disciplines.</em>
            </h2>
          </div>
          <p>
            Strategy, research, creative, and analytics — usually four hires.
            Here, one integrated way of working.
          </p>
        </Reveal>
        <div className="skills-grid">
          {GROUPS.map((g) => (
            <Reveal className="skill-card" delay={g.delay} key={g.title}>
              <div className="skill-icon">{g.icon}</div>
              <p className="role">{g.role}</p>
              <h3>{g.title}</h3>
              <ul className="skill-tags">
                {g.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
