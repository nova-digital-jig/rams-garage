"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      onComplete();
      return;
    }

    const letters = containerRef.current?.querySelectorAll(".preloader__letter");
    if (!letters || !barFillRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    tl.to(barFillRef.current, {
      width: "100%",
      duration: 1.8,
      ease: "power2.inOut",
    });

    tl.to(
      letters,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
      },
      0.2
    );

    tl.to({}, { duration: 0.4 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const text = "RAM'S";

  return (
    <div className="preloader" ref={containerRef}>
      <div className="preloader__text">
        {text.split("").map((letter, i) => (
          <span key={i} className="preloader__letter">
            {letter}
          </span>
        ))}
      </div>
      <div className="preloader__bar">
        <div className="preloader__bar-fill" ref={barFillRef} />
      </div>
    </div>
  );
}
