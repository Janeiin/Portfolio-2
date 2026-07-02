import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const TIMELINE = [
  {
    when: "Education",
    what: "Bachelor of International Business & Management • PhD in Marketing",
    note: "My doctoral research explored audience behaviour and consumer decision-making. I still believe the best marketing is grounded in evidence, not assumptions.",
  },
  {
    when: "Marketing & Social Media",
    what: "Brand strategy, content and digital marketing",
    note: "Worked across marketing, social media, digital media and events for brands including Mercedes-Benz, Ferrari, Lamborghini and Maserati. Developed a research-backed social media strategy for Shiseido and previously worked as a Digital Media Account Manager.",
  },
  {
    when: "Corporate",
    what: "Group strategy & transformation",
    note: "Led strategy across large organisations, combining market research, communications, storytelling and executive engagement to turn ideas into action.",
  },
  {
    when: "Today",
    what: "Strategic Marketing Consultant",
    note: "Helping organisations navigate a fast-moving world by combining rigorous strategy and research with creative marketing and storytelling.",
  },
];

const STATS = [
  { to: 8, label: "Years in Marketing & Strategy" },
  { to: 10, label: "Brands managed" },
  { to: 15, label: "Marketing & branded events" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">About</p>
            <h2>Hi, <em>I'm Janin.</em></h2>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal as="figure" className="about-portrait">
            <figcaption>Portrait — Janin</figcaption>
          </Reveal>
          <Reveal className="about-body" delay={1}>
            <p className="about-lede">I'm a creative, strategist, and marketer who loves helping businesses turn good ideas into brands people actually remember.</p>
            <p>My career has taken me from corporate boardrooms and university classrooms to content shoots, brand workshops, and digital campaigns. Along the way I've worked on everything from enterprise strategy and market research to social media, websites, brand positioning, and AI-powered marketing.</p>
            <p>That mix is my superpower. I can zoom out to understand where your business is going, then zoom back in to create the content, messaging, and customer experience that gets you there.</p>
            <p><strong>Most marketers start with, "What should we post this week?"</strong></p>
            <p><strong>I start with, "What problem are we solving?"</strong></p>
            <p>Because the best marketing isn't just creative—it's intentional. Every campaign should have a purpose, every piece of content should support a business goal, and every brand should tell a story worth following.</p>
            <p><em>(And yes, as a millennial, I spend an unreasonable amount of time on social media—but at least now I can call it market research.)</em></p>
            <ul className="timeline">
              {TIMELINE.map((t)=>(
                <li key={t.when}>
                  <span className="t-when">{t.when}</span>
                  <p className="t-what">{t.what}</p>
                  <p className="t-note">{t.note}</p>
                </li>
              ))}
            </ul>
            <div className="about-stats">
              {STATS.map((s)=>(
                <div className="stat-card" key={s.label}>
                  <div className="n"><Counter to={s.to}/><sup>+</sup></div>
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
