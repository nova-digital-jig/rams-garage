"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  slideLeft,
  slideRight,
  containerVariants,
  itemVariants,
  viewportOnce,
  prefersReducedMotion,
} from "@/lib/animations";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 38, suffix: "+", label: "Years in Business" },
  { value: 10000, suffix: "+", label: "Cars Fixed" },
  { value: 280, suffix: "+", label: "Google Reviews" },
  { value: 100, suffix: "%", label: "ASE Certified" },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image — slides from left with parallax */}
          <motion.div
            ref={imageRef}
            className="relative aspect-[4/5] rounded-xl overflow-hidden"
            variants={slideLeft}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            style={reduced ? undefined : { y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
              alt="Ram's Garage team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content — slides from right */}
          <motion.div
            variants={slideRight}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-amber mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal uppercase leading-tight mb-6">
              Family-Owned. Community-Trusted.
            </h2>
            <p className="text-gray-medium text-base sm:text-lg leading-relaxed mb-4">
              Founded by Ram Patel in 1987, Ram&apos;s Garage has been Edison&apos;s trusted auto
              repair shop for over three decades. We treat every car like our own.
            </p>
            <p className="text-gray-medium text-base sm:text-lg leading-relaxed mb-10">
              Our ASE-certified mechanics combine old-school care with modern diagnostic
              technology. From routine oil changes to complex engine rebuilds, we deliver
              honest work at fair prices — every time.
            </p>

            {/* Stats — staggered fade up */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              variants={containerVariants}
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={viewportOnce}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} className="text-center lg:text-left" variants={itemVariants}>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-text-muted text-xs sm:text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
