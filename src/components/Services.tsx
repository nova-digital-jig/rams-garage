"use client";

import { useEffect, useRef } from "react";
import {
  Droplets,
  Disc,
  Cpu,
  ClipboardCheck,
  Cog,
  Thermometer,
  Car,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    name: "Oil Change",
    description: "Conventional & synthetic oil changes with filter replacement",
    price: "From $39.99",
  },
  {
    icon: Disc,
    name: "Brake Repair",
    description: "Pads, rotors, calipers — complete brake system service",
    price: "From $149",
  },
  {
    icon: Cpu,
    name: "Engine Diagnostics",
    description: "Computer diagnostics to pinpoint check engine light issues",
    price: "From $89",
  },
  {
    icon: ClipboardCheck,
    name: "NJ State Inspection",
    description: "Official NJ state emissions & safety inspection station",
    price: "$50",
  },
  {
    icon: Cog,
    name: "Transmission Service",
    description: "Fluid flush, filter replacement & transmission repair",
    price: "From $179",
  },
  {
    icon: Thermometer,
    name: "A/C & Heating",
    description: "Refrigerant recharge, compressor repair & heater core service",
    price: "From $99",
  },
  {
    icon: Car,
    name: "Tire Services",
    description: "Rotation, balancing, alignment & new tire installation",
    price: "From $25",
  },
  {
    icon: Wrench,
    name: "General Repair",
    description: "Suspension, exhaust, electrical, belts & hoses and more",
    price: "Call for Quote",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-charcoal py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="fade-up text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase mb-3">
            Our Services
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Full-service auto repair for all makes and models
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className={`fade-up fade-up-delay-${(i % 4) + 1} group bg-charcoal-light border border-gray-medium/30 rounded-lg p-6 hover:border-t-amber hover:border-t-2 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-4 group-hover:bg-amber/20 transition-colors">
                  <Icon className="w-6 h-6 text-amber" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">
                  {service.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="font-display font-bold text-amber text-sm">
                  {service.price}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
