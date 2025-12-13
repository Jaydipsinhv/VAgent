"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode, Children } from "react";

interface FadeInStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * Staggered fade-in for grids/lists
 * - Configurable stagger delay
 * - Smooth animations
 * - Visible movement
 */
export default function FadeInStagger({
  children,
  className = "",
  staggerDelay = 0.05,
}: FadeInStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -150px 0px",
    amount: 0.1
  });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const childrenArray = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

