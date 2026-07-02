import Reveal from "@/components/Reveal";

const CAMPAIGNS = [
  {
    visual: "cv-1",
    tag: "Healthcare · Employer brand",
    num: "01",
    title: "The People Behind the Care",
    intro:
      "A national healthcare group struggling to recruit clinical staff in a competitive labour market.",
    challenge:
      "Job ads alone weren't converting — candidates couldn't see the culture behind the roles.",
    strategy:
      "Reframed recruitment as brand storytelling: a documentary-style series following real staff across a shift, distributed on LinkedIn and Instagram with targeted paid support.",
    content:
      "12 short-form films, 24 carousel stories, employee takeover weeks, and a landing hub linked to live vacancies.",
    metrics: [
      { n: "+164%", l: "Qualified applications" },
      { n: "2.1M", l: "Organic reach" },
      { n: "−38%", l: "Cost per hire" },
    ],
  },
  {
    visual: "cv-2",
    tag: "Luxury · Market entry",
    num: "02",
    title: "Quiet Luxury, Loud Results",
    intro:
      "A boutique luxury interiors brand entering the Gulf market with zero existing audience.",
    challenge:
      "High-value, low-volume products with a long consideration cycle — mass-reach tactics would have burned budget.",
    strategy:
      "Insight-led positioning targeting interior designers and specifiers, not end consumers. Editorial Instagram presence paired with direct B2B outreach and a curated lookbook funnel.",
    content:
      "Material-focused photography direction, designer spotlight series, and a bilingual launch campaign built for the regional aesthetic.",
    metrics: [
      { n: "34", l: "Trade partnerships opened" },
      { n: "8.4%", l: "Engagement rate" },
      { n: "6×", l: "Return on ad spend" },
    ],
  },
  {
    visual: "cv-3",
    tag: "Higher education · Enrolment",
    num: "03",
    title: "From Open Day to Enrolled",
    intro:
      "A university faculty facing declining postgraduate enrolments despite strong program rankings.",
    challenge:
      "Prospective students engaged with content but dropped off before application — the funnel leaked in the middle.",
    strategy:
      'Audience research revealed the real barrier: career uncertainty, not program quality. Rebuilt the content strategy around alumni outcomes and "day in the career" storytelling.',
    content:
      "Alumni video series, TikTok Q&As with academics, retargeting sequences mapped to each stage of the application journey.",
    metrics: [
      { n: "+47%", l: "Applications YoY" },
      { n: "3.2×", l: "Video completion rate" },
      { n: "+61%", l: "Open day conversions" },
    ],
  },
];

export default function Campaigns() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Featured campaigns</p>
            <h2>
              Work that <em>moves numbers.</em>
            </h2>
          </div>
          <p>
            Selected campaigns, presented the way I run them — from business
            challenge to measured result.
          </p>
        </Reveal>
        <div className="camp-grid">
          {CAMPAIGNS.map((c) => (
            <Reveal as="article" className="camp-card" key={c.num}>
              <div className={`camp-visual ${c.visual}`}>
                <span className="tag">{c.tag}</span>
                <span className="big">{c.num}</span>
              </div>
              <div className="camp-body">
                <h3>{c.title}</h3>
                <p style={{ color: "var(--ink-soft)" }}>{c.intro}</p>
                <dl className="camp-kv">
                  <dt>Challenge</dt>
                  <dd>{c.challenge}</dd>
                  <dt>Strategy</dt>
                  <dd>{c.strategy}</dd>
                  <dt>Content</dt>
                  <dd>{c.content}</dd>
                </dl>
                <div className="camp-metrics">
                  {c.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="n">{m.n}</div>
                      <div className="l">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
