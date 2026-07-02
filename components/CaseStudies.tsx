import Reveal from "@/components/Reveal";

type Case = {
  light?: boolean;
  eyebrow: [string, string];
  title: string;
  intro: string;
  steps: { label: string; text: string }[];
  results: { n: React.ReactNode; l: string }[];
  lesson: string;
};

const CASES: Case[] = [
  {
    eyebrow: ["Case study 01", "Healthcare"],
    title: "Rebuilding trust in a regional health service",
    intro:
      "After a difficult restructure, a regional health service faced declining community sentiment and staff advocacy. The brief: rebuild trust — publicly, measurably, within twelve months.",
    steps: [
      { label: "Problem", text: "Community sentiment at a five-year low; staff reluctant to advocate publicly for their own employer." },
      { label: "Research", text: "Sentiment audit across 18 months of mentions, plus qualitative interviews with staff, patients, and community leaders." },
      { label: "Audience", text: "Three priority segments: local families, referring clinicians, and current staff — each with distinct trust drivers." },
      { label: "Objectives", text: "Lift net sentiment to positive, double staff-shared content, grow community following 40% in 12 months." },
      { label: "Strategy", text: "Lead with proof, not promises: transparent service updates, clinician-fronted content, and community co-created stories." },
      { label: "Creative direction", text: "Warm documentary tone. Real people, real settings, no stock imagery — a deliberate contrast with the corporate past." },
      { label: "Content creation", text: "Weekly clinician explainers, monthly community features, a \"your questions answered\" series driven by comment data." },
      { label: "Execution", text: "Phased 12-month rollout across Facebook, Instagram, and LinkedIn, with an internal advocacy toolkit for staff." },
      { label: "Analytics", text: "Monthly sentiment tracking, engagement quality scoring, and attribution of website enquiries to social touchpoints." },
    ],
    results: [
      { n: <>+72<em>pts</em></>, l: "Net sentiment swing" },
      { n: "2.4×", l: "Staff-shared content" },
      { n: "+58%", l: "Community following" },
    ],
    lesson:
      "Lesson learned: trust isn't rebuilt by talking more — it's rebuilt by letting the people who deliver the service do the talking.",
  },
  {
    light: true,
    eyebrow: ["Case study 02", "Consumer launch"],
    title: "Launching a wellness brand into a crowded feed",
    intro:
      "A new wellness product with no audience, a limited budget, and a category full of louder competitors. The brief: find the whitespace and own it.",
    steps: [
      { label: "Problem", text: "Category saturated with influencer-led hype; a science-backed product risked being invisible or indistinguishable." },
      { label: "Research", text: "Social listening across 40k category conversations revealed rising fatigue with exaggerated claims — an unmet demand for honesty." },
      { label: "Audience", text: "Research-minded consumers, 28–45, who read labels, follow evidence, and distrust hype." },
      { label: "Objectives", text: "Build a 10k engaged following pre-launch and convert 2% to first purchase in the launch quarter." },
      { label: "Strategy", text: "\"Radically evidence-based\" positioning: publish the research, show the sourcing, invite the hard questions competitors avoid." },
      { label: "Creative direction", text: "Clean editorial design, annotated ingredient visuals, and a calm voice in a shouty category." },
      { label: "Content creation", text: "Myth-vs-evidence carousels, founder lab-notes series, and expert collaborations with credentialed voices." },
      { label: "Execution", text: "Eight-week pre-launch runway on Instagram and TikTok, layered with email capture and a waitlist mechanic." },
      { label: "Analytics", text: "Full-funnel tracking from first view to checkout; weekly creative testing with clear kill/scale rules." },
    ],
    results: [
      { n: "14.2k", l: "Pre-launch community" },
      { n: "3.1%", l: "Launch conversion rate" },
      { n: "41%", l: "Sales from organic social" },
    ],
    lesson:
      "Lesson learned: in a saturated category, the boldest creative move can be restraint — evidence, calmly presented, outperformed hype.",
  },
];

export default function CaseStudies() {
  return (
    <section className="section" id="cases">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2>
              The full method, <em>end to end.</em>
            </h2>
          </div>
          <p>
            Two projects unpacked step by step — because how the result was
            reached matters as much as the result.
          </p>
        </Reveal>
        {CASES.map((c) => (
          <Reveal
            as="article"
            className={`case${c.light ? " case-light" : ""}`}
            key={c.title}
          >
            <p className="eyebrow">
              {c.eyebrow[0]} <span className="x">×</span> {c.eyebrow[1]}
            </p>
            <h3>{c.title}</h3>
            <p className="case-intro">{c.intro}</p>
            <div className="case-steps">
              {c.steps.map((s) => (
                <div className="case-step" key={s.label}>
                  <span className="s-label">{s.label}</span>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="case-results">
              {c.results.map((r) => (
                <div key={r.l}>
                  <div className="n">{r.n}</div>
                  <div className="l">{r.l}</div>
                </div>
              ))}
            </div>
            <p className="case-lesson">{c.lesson}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
