"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Shield, Award, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, containerVariants, prefersReducedMotion } from "@/lib/animations";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  const headlineWords = "Edison's Most Trusted Auto Repair".split(" ");

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with scale-down reveal */}
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80"
          alt="Mechanic working under a car"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 rounded-full px-4 py-2 mb-6"
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={itemVariants}
          >
            <Shield className="w-4 h-4 text-amber" />
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
              38 Years of Trust
            </span>
          </motion.div>

          {/* Headline — each word staggers up */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                custom={i}
                initial={reduced ? false : "hidden"}
                animate="visible"
                variants={wordVariants}
              >
                {word === "Edison's" ? <>Edison&apos;s</> : word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg"
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={itemVariants}
            transition={{ delay: 0.5 }}
          >
            Family-owned since 1987. ASE Certified. Honest work at fair prices.
          </motion.p>

          {/* CTAs — fade up after headline */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={itemVariants}
            transition={{ delay: 0.65 }}
          >
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
          </motion.div>

          {/* Trust Badges — slide up last */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400"
            variants={containerVariants}
            initial={reduced ? false : "hidden"}
            animate="visible"
            transition={{ delayChildren: 0.8 }}
          >
            <motion.span className="flex items-center gap-1.5" variants={itemVariants}>
              <Award className="w-4 h-4 text-amber" />
              ASE Certified
            </motion.span>
            <motion.span className="flex items-center gap-1.5" variants={itemVariants}>
              <CheckCircle className="w-4 h-4 text-amber" />
              A+ BBB Rated
            </motion.span>
            <motion.span className="flex items-center gap-1.5" variants={itemVariants}>
              <Shield className="w-4 h-4 text-amber" />
              NJ Inspection Station
            </motion.span>
            <motion.span className="flex items-center gap-1.5" variants={itemVariants}>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              4.9★ Google (280+ Reviews)
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
