"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion"; // Import framer motion
import { useInView } from 'react-intersection-observer'; // Import intersection observer
import { cn } from "@/lib/utils";
import RevealOnScroll from "../Software/RevealOnScroll";

const testimonialGridVariants = cva("max-w-4xl md:max-w-6xl px-2", {
  variants: {
    columns: {
      1: "columns-1",
      2: "sm:columns-2",
      3: "md:columns-3",
      4: "lg:columns-4",
      5: "xl:columns-5",
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

const testimonialItemVariants = cva(
  "break-inside-avoid p-6 bg-transparent rounded-lg shadow-lg text-center",
  {
    variants: {
      spacing: {
        sm: "mb-2",
        md: "mb-4",
        lg: "mb-6",
      },
    },
    defaultVariants: {
      spacing: "md",
    },
  }
);

export interface TestimonialCardProps
  extends VariantProps<typeof testimonialGridVariants>,
    VariantProps<typeof testimonialItemVariants> {
  testimonials: { quote: string; name: string }[];
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonials,
  columns,
  spacing,
  className,
}) => {
  // Use useInView hook outside the loop
  const inViewRefs = testimonials.map(() => useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,     // Trigger when 20% of the element is in view
  }));

  return (
    <div className={cn(testimonialGridVariants({ columns }), className)}>
      {testimonials.map((testimonial, i) => {
        // Destructure ref and inView state for each testimonial
        const { ref, inView } = inViewRefs[i];

        return (
          <motion.div
            key={`${testimonial.name}-${i}`}
            className={cn(testimonialItemVariants({ spacing }))}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}  // Initial state for animation (starting from below)
            animate={{
              opacity: inView ? 1 : 0,       // Animate to full opacity when in view
              y: inView ? 0 : 50,             // Animate the vertical position (slide in and out)
              transition: {
                duration: 0.8,               // Duration of the animation
                ease: "easeOut",             // Smooth easing
                yoyo: 1,                     // Make the element animate back down once it's out of view
              },
            }}
          >
            <RevealOnScroll><p className="text-lg text-blue-200 italic mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p></RevealOnScroll>
            <h3 className="text-base font-semibold text-white">
              - {testimonial.name}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
};
