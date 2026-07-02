import Reveal from "@/components/Reveal";

const TILES = [
  { size: "t-sq", g: "g1", fmt: "Instagram post", name: "Brand launch teaser" },
  { size: "t-tall", g: "g2", fmt: "Reel", name: "Behind the craft" },
  { size: "t-mid", g: "g3", fmt: "Carousel", name: "5 insights from our audience research" },
  { size: "t-wide", g: "g4", fmt: "LinkedIn post", name: "Executive thought leadership" },
  { size: "t-tall", g: "g5", fmt: "Story", name: "Event countdown series" },
  { size: "t-sq", g: "g6", fmt: "Infographic", name: "Market snapshot Q2" },
  { size: "t-mid", g: "g7", fmt: "TikTok", name: "Ask the expert" },
  { size: "t-wide", g: "g8", fmt: "Facebook campaign", name: "Community open day" },
  { size: "t-sq", g: "g9", fmt: "Brand graphic", name: "Quote series — founder voice" },
  { size: "t-tall", g: "g10", fmt: "Short-form video", name: "Product in 15 seconds" },
  { size: "t-mid", g: "g4", fmt: "Carousel", name: "Before / after the rebrand" },
  { size: "t-sq", g: "g2", fmt: "Instagram post", name: "Campaign hero visual" },
];

export default function Gallery() {
  return (
    <section className="section section-alt" id="gallery">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Social media gallery</p>
            <h2>
              Made for the <em>feed.</em>
            </h2>
          </div>
          <p>
            A working sample of formats — every placeholder here maps to a
            real deliverable type in my practice.
          </p>
        </Reveal>
        <Reveal className="masonry">
          {TILES.map((t, i) => (
            <div className={`tile ${t.size} ${t.g}`} key={i}>
              <div className="tile-label">
                <span className="fmt">{t.fmt}</span>
                <span className="name">{t.name}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
