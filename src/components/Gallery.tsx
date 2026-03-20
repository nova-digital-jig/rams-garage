"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    alt: "Mechanic performing engine repair",
    label: "Engine Work",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Brake inspection and repair service",
    label: "Brake Service",
  },
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80",
    alt: "Tire mounting and balancing",
    label: "Tire Service",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    alt: "Diagnostic computer connected to vehicle",
    label: "Diagnostics",
  },
  {
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80",
    alt: "Oil change service being performed",
    label: "Oil Changes",
  },
  {
    src: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=600&q=80",
    alt: "Clean auto repair shop bay",
    label: "Our Shop",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".gallery__item");
      if (!items) return;

      items.forEach((item, i) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery" ref={sectionRef}>
      <div className="gallery__header">
        <p className="gallery__label">Our Work</p>
        <h2 className="gallery__title">Inside the Shop</h2>
      </div>

      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item, i) => (
          <div className="gallery__item" key={i}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="gallery__overlay">
              <span className="gallery__overlay-text">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
