"use client";

import { useEffect, useState } from "react";
import { Award, ShieldCheck, BadgeDollarSign, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  viewportOnce,
  prefersReducedMotion,
} from "@/lib/animations";

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

// Icon scale-up with spring physics
const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

export default function WhyChooseUs() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  return (
    <section className="bg-gray-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal uppercase text-center mb-14"
          variants={itemVariants}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          Why Choose Ram&apos;s Garage
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center"
                variants={itemVariants}
              >
                {/* Icon scales up with spring */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-amber flex items-center justify-center mx-auto mb-4"
                  variants={iconVariants}
                >
                  <Icon className="w-7 h-7 text-charcoal" />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-charcoal uppercase mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
