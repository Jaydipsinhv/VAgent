"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Simple, professional fade-in animation
 * - Minimal movement (8px)
 * - Fast duration (0.4s)
 * - Smooth easing
 * - High initial opacity (content mostly visible)
 */
export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -100px 0px",
    amount: 0.3
  });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.85, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.85, y: 8 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Smooth, professional easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

