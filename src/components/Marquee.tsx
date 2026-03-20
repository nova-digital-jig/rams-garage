"use client";

const ITEMS = [
  "OIL CHANGE",
  "BRAKES",
  "ENGINE",
  "TIRES",
  "INSPECTION",
  "AC",
  "TRANSMISSION",
  "SUSPENSION",
];

function MarqueeContent() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="marquee__item">
          {item}
          <span className="marquee__dot">·</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <section className="marquee">
      <div className="marquee__track">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
