"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80", alt: "Engine repair" },
  { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80", alt: "Brake service" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", alt: "Vehicle exterior" },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80", alt: "Under car repair" },
  { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80", alt: "Shop interior" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80", alt: "Diagnostic work" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="fade-up font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal uppercase text-center mb-14">
          Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div
              key={image.src}
              className={`fade-up fade-up-delay-${(i % 4) + 1} relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
