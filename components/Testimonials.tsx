import Reveal from "@/components/Reveal";

const TESTIMONIALS: {
  quote: string;
  initials: string;
  avatar: string;
  who: string;
  role: string;
  delay: 0 | 1 | 2;
}[] = [
  {
    quote:
      "Janin is the rare strategist who can sit in an executive meeting in the morning and direct a content shoot in the afternoon. She translated our corporate strategy into a social presence the board actually understands.",
    initials: "SR",
    avatar: "av-1",
    who: "Sarah R.",
    role: "Director of Communications, healthcare group",
    delay: 0,
  },
  {
    quote:
      "The research phase changed everything. We thought we had an awareness problem — Janin's audience work showed it was a trust problem, and the campaign she built around that insight delivered our best quarter yet.",
    initials: "MA",
    avatar: "av-2",
    who: "Mohammed A.",
    role: "Founder, consumer brand",
    delay: 1,
  },
  {
    quote:
      "Rigorous, precise, and genuinely creative. Janin's academic depth shows in everything — the strategy documents alone were worth the engagement, and the results spoke for themselves.",
    initials: "LK",
    avatar: "av-3",
    who: "Lena K.",
    role: "Head of Marketing, higher education",
    delay: 2,
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2>
              In their <em>words.</em>
            </h2>
          </div>
          <p>What clients and collaborators say about working together.</p>
        </Reveal>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <Reveal className="testi" delay={t.delay} key={t.initials}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <q>{t.quote}</q>
              <div className="testi-person">
                <div className={`avatar ${t.avatar}`}>{t.initials}</div>
                <div>
                  <div className="who">{t.who}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
