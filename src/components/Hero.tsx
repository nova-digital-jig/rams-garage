"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LINES = ["HONEST", "REPAIRS.", "FAIR PRICES."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const section = sectionRef.current;
    if (!section) return;

    const words = section.querySelectorAll(".hero__title-word");
    const subtitle = section.querySelector(".hero__subtitle");
    const ctas = section.querySelector(".hero__ctas");
    const trustBar = section.querySelector(".hero__trust-bar");

    if (!words.length || !subtitle || !ctas || !trustBar) return;

    const tl = gsap.timeline({ delay: 2.2 });

    tl.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });

    tl.from(
      subtitle,
      { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    tl.from(
      ctas,
      { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    tl.from(
      trustBar,
      { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__bg-glow" />
      <div className="grain-overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          {LINES.map((line, lineIdx) => (
            <span className="hero__title-line" key={lineIdx}>
              {line.split(" ").map((word, wordIdx) => (
                <span key={wordIdx}>
                  <span className="hero__title-word">{word}</span>
                  {wordIdx < line.split(" ").length - 1 && "\u00A0"}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero__subtitle">
          Family-owned auto repair in Edison, NJ since 1987.
          <br />
          ASE Certified. A+ BBB Rated.
        </p>

        <div className="hero__ctas">
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
            Call Now
          </a>
          <a href="#contact" className="btn-ghost">
            Book Service
          </a>
        </div>

        <div className="hero__trust-bar">
          <span>
            <span className="star">★</span> 4.9 Google
          </span>
          <span>280+ Reviews</span>
          <span>38 Years</span>
          <span>ASE Certified</span>
        </div>
      </div>
    </section>
  );
}
