"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const words = sectionRef.current?.querySelectorAll(
        ".cta-section__title-word"
      );
      if (words) {
        gsap.to(words, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }

      const subtitle = sectionRef.current?.querySelector(
        ".cta-section__subtitle"
      );
      const buttons = sectionRef.current?.querySelector(
        ".cta-section__buttons"
      );
      if (subtitle && buttons) {
        gsap.from([subtitle, buttons], {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="grain-overlay" />

      <h2 className="cta-section__title" style={{ position: "relative", zIndex: 1 }}>
        <span className="cta-section__title-line">
          <span className="cta-section__title-word">YOUR CAR</span>
        </span>
        <span className="cta-section__title-line">
          <span className="cta-section__title-word accent">
            DESERVES BETTER.
          </span>
        </span>
      </h2>

      <p className="cta-section__subtitle" style={{ position: "relative", zIndex: 1 }}>
        Schedule your service today
      </p>

      <div className="cta-section__buttons" style={{ position: "relative", zIndex: 1 }}>
        <a href="tel:7325550187" className="btn-primary">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          (732) 555-0187
        </a>
        <a href="#services" className="btn-ghost">
          View Services
        </a>
      </div>
    </section>
  );
}
