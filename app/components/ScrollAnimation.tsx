"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
  duration?: number;
  distance?: number;
}

const defaultVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function ScrollAnimation({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.6,
  distance = 30,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-150px",
    amount: 0.1 
  });
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, show content immediately
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0.3, // Start with some visibility for smoother feel
      y: direction === "up" ? distance * 0.5 : direction === "down" ? -distance * 0.5 : 0,
      x: direction === "left" ? distance * 0.5 : direction === "right" ? -distance * 0.5 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Ultra smooth easing - like Cactus
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
