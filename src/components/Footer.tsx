"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">
            RAM<span>&apos;</span>S GARAGE
          </div>
          <p className="footer__desc">
            Honest Repairs. Fair Prices. Since 1987. Family-owned auto repair
            serving Edison, Metuchen, Woodbridge, Piscataway, and all of
            Middlesex County.
          </p>
        </div>

        <div>
          <h3 className="footer__heading">Services</h3>
          <ul className="footer__list">
            <li>Oil Changes</li>
            <li>Brake Repair</li>
            <li>Engine Diagnostics</li>
            <li>Transmission</li>
            <li>Tires</li>
            <li>NJ Inspection</li>
            <li>AC Repair</li>
            <li>Suspension</li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__list">
            <li>
              <a href="tel:7325550187">(732) 555-0187</a>
            </li>
            <li>
              <a href="mailto:ramsgarage@example.com">ramsgarage@example.com</a>
            </li>
            <li>123 Main St</li>
            <li>Edison, NJ 08817</li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Hours</h3>
          <ul className="footer__list">
            <li>Mon–Fri: 7:30am–6pm</li>
            <li>Sat: 8am–3pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 Ram&apos;s Garage. All rights reserved.</span>
        <span>
          Website by{" "}
          <a
            href="https://nova-digital-nextjs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nova Digital
          </a>
        </span>
      </div>
    </footer>
  );
}
