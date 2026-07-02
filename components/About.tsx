import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const TIMELINE = [
  {
    when: "Foundation",
    what: "PhD in Marketing",
    note: "Doctoral research into audience behaviour and decision-making — the evidence base behind every campaign I build.",
  },
  {
    when: "Academia",
    what: "University lecturer & researcher",
    note: "Six years teaching marketing and coordinating courses, translating complex ideas for demanding audiences.",
  },
  {
    when: "Corporate",
    what: "Group strategy & transformation",
    note: "Strategy leadership across large-scale organisations — capital decisions, transformation programs, executive storytelling.",
  },
  {
    when: "Today",
    what: "Strategic marketing consultant",
    note: "Bringing boardroom rigour to brand and social — strategy, research, and content in one integrated practice.",
  },
];

const STATS = [
  { to: 8, label: "Years in strategy & marketing" },
  { to: 10, label: "Transformation programs led" },
  { to: 450, label: "Google Scholar citations" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">About</p>
            <h2>
              Strategy first. <em>Story always.</em>
            </h2>
          </div>
          <p>
            Most social media starts with content. Mine starts with the
            business question behind it.
          </p>
        </Reveal>
        <div className="about-grid">
          <Reveal as="figure" className="about-portrait">
            <figcaption>Portrait — Janin, PhD</figcaption>
          </Reveal>
          <Reveal className="about-body" delay={1}>
            <p className="about-lede">
              I&apos;m Janin — a marketing PhD who spent years inside
              boardrooms, lecture theatres, and research projects before ever
              writing a caption.
            </p>
            <p>
              My background spans{" "}
              <strong>
                corporate strategy, brand strategy, market research, higher
                education, and business consulting
              </strong>
              . I&apos;ve advised on major capital and transformation
              decisions, taught marketing at university level, and published
              peer-reviewed research on how audiences actually think and
              decide.
            </p>
            <p>
              That path shapes how I work. Where a traditional social media
              manager begins with a content calendar, I begin with your
              business model, your audience data, and the outcome you&apos;re
              accountable for. Content comes last — and lands harder because
              of it.
            </p>
            <p>
              <strong>My philosophy is simple:</strong> every post is a
              strategic asset. If a piece of content can&apos;t be traced back
              to a business goal, it doesn&apos;t earn a place in the plan.
            </p>
            <ul className="timeline">
              {TIMELINE.map((t) => (
                <li key={t.when}>
                  <span className="t-when">{t.when}</span>
                  <p className="t-what">{t.what}</p>
                  <p className="t-note">{t.note}</p>
                </li>
              ))}
            </ul>
            <div className="about-stats">
              {STATS.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="n">
                    <Counter to={s.to} />
                    <sup>+</sup>
                  </div>
                  <div className="d">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
