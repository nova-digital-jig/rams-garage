"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  scaleReveal,
  itemVariants,
  viewportOnce,
  prefersReducedMotion,
} from "@/lib/animations";

const images = [
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80", alt: "Engine repair" },
  { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80", alt: "Brake service" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", alt: "Vehicle exterior" },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80", alt: "Under car repair" },
  { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80", alt: "Shop interior" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80", alt: "Diagnostic work" },
];

export default function Gallery() {
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
          Our Work
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {images.map((image) => (
            <motion.div
              key={image.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              variants={scaleReveal}
              whileHover={reduced ? undefined : { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
