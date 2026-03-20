"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 38, suffix: "+", label: "Years in Business" },
  { value: 10000, suffix: "+", label: "Cars Fixed" },
  { value: 4.9, suffix: "★", label: "Google Rating", isDecimal: true },
  { value: 100, suffix: "%", label: "ASE Certified" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Parallax image
      if (imageRef.current) {
        gsap.to(imageRef.current.querySelector("img"), {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Text reveal
      const textContent = sectionRef.current?.querySelector(".about__text-content");
      if (textContent) {
        gsap.from(textContent, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContent,
            start: "top 85%",
          },
        });
      }

      // Stats counter
      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll(".about__stat-number");
        statNumbers.forEach((el) => {
          const target = parseFloat(el.getAttribute("data-value") || "0");
          const isDecimal = el.getAttribute("data-decimal") === "true";
          const suffix = el.getAttribute("data-suffix") || "";

          gsap.from(el, {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: isDecimal ? { textContent: 0.1 } : { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
            onUpdate: function () {
              const current = parseFloat(
                (el as HTMLElement).textContent?.replace(/[^0-9.]/g, "") || "0"
              );
              if (isDecimal) {
                (el as HTMLElement).textContent = current.toFixed(1) + suffix;
              } else {
                (el as HTMLElement).textContent =
                  Math.floor(current).toLocaleString() + suffix;
              }
            },
            onComplete: function () {
              if (isDecimal) {
                (el as HTMLElement).textContent = target.toFixed(1) + suffix;
              } else {
                (el as HTMLElement).textContent =
                  target.toLocaleString() + suffix;
              }
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__grid">
        <div className="about__image-wrapper" ref={imageRef}>
          <Image
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
            alt="Ram's Garage auto repair shop interior with mechanic working"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="about__text-content">
          <p className="about__label">Our Story</p>
          <h2 className="about__title">
            Trusted by Edison
            <br />
            Since 1987
          </h2>
          <p className="about__text">
            Founded in 1987 by Ram Patel, this family-owned shop has served
            Edison for over three decades. What started as a two-bay garage has
            grown into one of the most trusted repair shops in Middlesex County.
            We treat every car like it&apos;s our own — because your trust is
            everything.
          </p>

          <div className="about__stats" ref={statsRef}>
            {STATS.map((stat, i) => (
              <div key={i}>
                <div
                  className="about__stat-number"
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                  data-decimal={stat.isDecimal ? "true" : "false"}
                >
                  0{stat.suffix}
                </div>
                <div className="about__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
