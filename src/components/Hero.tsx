"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, Shield, Award, Star, CheckCircle } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".fade-up");
    const timer = setTimeout(() => {
      children.forEach((child) => child.classList.add("visible"));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80"
        alt="Mechanic working under a car"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay — heavier on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 bg-amber/10 border border-amber/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-amber" />
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
              38 Years of Trust
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up fade-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4">
            Edison&apos;s Most Trusted Auto Repair
          </h1>

          {/* Subtitle */}
          <p className="fade-up fade-up-delay-2 text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            Family-owned since 1987. ASE Certified. Honest work at fair prices.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-delay-3 flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-charcoal font-display font-bold text-base uppercase tracking-wider px-7 py-3.5 rounded transition-colors"
            >
              Schedule Service
            </a>
            <a
              href="tel:7325550187"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-display font-bold text-base uppercase tracking-wider px-7 py-3.5 rounded transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (732) 555-0187
            </a>
          </div>

          {/* Trust Badges */}
          <div className="fade-up fade-up-delay-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber" />
              ASE Certified
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber" />
              A+ BBB Rated
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-amber" />
              NJ Inspection Station
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              4.9★ Google (280+ Reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
