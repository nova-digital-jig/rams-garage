"use client";

import { useEffect, useRef } from "react";
import { Award, ShieldCheck, BadgeDollarSign, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "38+ Years Experience",
    description: "Trusted by Edison families since 1987",
  },
  {
    icon: ShieldCheck,
    title: "ASE Certified Mechanics",
    description: "Factory-trained and nationally certified",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest, Upfront Pricing",
    description: "No hidden fees — we explain before we repair",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Most repairs completed the same day you drop off",
  },
];

export default function WhyChooseUs() {
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
      { threshold: 0.15 }
    );
    el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="fade-up font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal uppercase text-center mb-14">
          Why Choose Ram&apos;s Garage
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`fade-up fade-up-delay-${i + 1} text-center`}
              >
                <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-charcoal" />
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal uppercase mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
