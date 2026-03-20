"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    text: "Best mechanic in Edison. Honest, fair, and they explain everything before doing any work.",
    author: "Mike T., Edison",
  },
  {
    text: "Been coming here for 15 years. Ram and his team are the real deal. No upselling, just honest work.",
    author: "Sarah L., Metuchen",
  },
  {
    text: "They found the issue other shops missed. Saved me $800. Will never go anywhere else.",
    author: "David K., Woodbridge",
  },
  {
    text: "Family-owned and it shows. They care about their customers. Wouldn't trust anyone else with my car.",
    author: "Jennifer M., Piscataway",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Title word animation
      const titleWords = sectionRef.current?.querySelectorAll(
        ".testimonials__title-word"
      );
      if (titleWords) {
        gsap.to(titleWords, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector(".testimonials__title"),
            start: "top 80%",
          },
        });
      }

      // Card reveals
      const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
      if (cards) {
        cards.forEach((card, i) => {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleText = "WHAT PEOPLE SAY ABOUT US";

  return (
    <section className="testimonials" id="reviews" ref={sectionRef}>
      <h2 className="testimonials__title">
        {titleText.split(" ").map((word, i) => (
          <span key={i}>
            <span className="testimonials__title-word">{word}</span>
            {" "}
          </span>
        ))}
      </h2>

      <div className="testimonials__grid">
        {REVIEWS.map((review, i) => (
          <div className="testimonial-card" key={i}>
            <span className="testimonial-card__quote-mark">&ldquo;</span>
            <div className="testimonial-card__stars">★★★★★</div>
            <p className="testimonial-card__text">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="testimonial-card__author">— {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
