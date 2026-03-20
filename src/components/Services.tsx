"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    name: "Oil Changes",
    desc: "Conventional & synthetic oil changes with multi-point inspection",
    price: "$39.99",
  },
  {
    name: "Brake Repair",
    desc: "Pads, rotors, calipers, and complete brake system service",
    price: "From $149",
  },
  {
    name: "Engine Diagnostics",
    desc: "Computer diagnostics, check engine light, performance tuning",
    price: "$89",
  },
  {
    name: "Transmission Service",
    desc: "Fluid flush, filter replacement, and complete transmission repair",
    price: "From $199",
  },
  {
    name: "Tire Sales & Service",
    desc: "New tires, mounting, balancing, rotation, and alignment",
    price: "From $79/tire",
  },
  {
    name: "NJ State Inspection",
    desc: "Official NJ Motor Vehicle inspection station",
    price: "$50",
  },
  {
    name: "AC Repair",
    desc: "Recharge, leak detection, compressor and full system repair",
    price: "From $129",
  },
  {
    name: "Suspension & Steering",
    desc: "Shocks, struts, ball joints, tie rods, and alignment",
    price: "From $179",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const rows = sectionRef.current?.querySelectorAll(".service-row");
    const header = sectionRef.current?.querySelector(".services__header");
    if (!rows || !header) return;

    gsap.from(header, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
      },
    });

    rows.forEach((row, i) => {
      gsap.from(row, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services__header">
        <p className="services__label">What We Do</p>
        <h2 className="services__title">Our Services</h2>
      </div>

      {SERVICES.map((service, i) => (
        <div className="service-row" key={i}>
          <span className="service-row__number">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="service-row__info">
            <span className="service-row__name">{service.name}</span>
            <span className="service-row__desc">{service.desc}</span>
          </div>
          <div className="service-row__right">
            <span className="service-row__price">{service.price}</span>
            <span className="service-row__arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
