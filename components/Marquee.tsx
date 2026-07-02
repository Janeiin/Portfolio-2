export default function Marquee() {
  const track = (
    <span>
      Strategy <em>×</em> Research <em>×</em> Story <em>×</em> Content{" "}
      <em>×</em> Analytics <em>×</em> Impact <em>×</em>
    </span>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </div>
  );
}
