"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  slideRight,
  itemVariants,
  viewportOnce,
  prefersReducedMotion,
} from "@/lib/animations";

const reviews = [
  {
    name: "Michael T.",
    rating: 5,
    text: "Best auto shop in Edison, hands down. Ram and his team diagnosed my transmission issue in 20 minutes when two other shops couldn't figure it out. Fair price, fast service.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "I've been bringing all three of our family cars here for 10 years. They're always honest about what needs fixing and what can wait. That kind of trust is rare.",
    date: "1 month ago",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Needed an emergency brake repair before a road trip. They fit me in same-day and had my car ready by 3pm. Lifesavers! Pricing was very reasonable too.",
    date: "3 weeks ago",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "As a woman, I've had bad experiences at other shops. Ram's Garage treats everyone with respect. They explain everything clearly and never push unnecessary services.",
    date: "1 month ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

// Staggered slideRight for review cards
const reviewContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const reviewCardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Reviews() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  return (
    <section id="reviews" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          variants={itemVariants}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal uppercase mb-3">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-text-muted">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-charcoal">4.9</span>
            <span>out of 5 based on 280+ Google Reviews</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={reviewContainerVariants}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              className="bg-gray-light rounded-xl p-6 sm:p-8 border border-gray-200"
              variants={reviewCardVariants}
            >
              <StarRating rating={review.rating} />
              <p className="text-charcoal text-base leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-charcoal text-sm uppercase">
                  {review.name}
                </span>
                <span className="text-text-muted text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
