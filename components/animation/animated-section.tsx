"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimationVariant = "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slideUp" ? 50 : 0,
      x: animation === "slideLeft" ? 50 : animation === "slideRight" ? -50 : 0,
      scale: animation === "scale" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  // Use "none" to disable animation but still have the intersection observer
  if (animation === "none") {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// Pre-built animation groups
export function AnimatedFadeIn({
  children,
  className = "",
  delay = 0,
  ...props
}: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="fadeIn" className={className} delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function AnimatedSlideUp({
  children,
  className = "",
  delay = 0,
  ...props
}: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="slideUp" className={className} delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function AnimatedSlideLeft({
  children,
  className = "",
  delay = 0,
  ...props
}: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="slideLeft" className={className} delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function AnimatedSlideRight({
  children,
  className = "",
  delay = 0,
  ...props
}: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="slideRight" className={className} delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function AnimatedScale({
  children,
  className = "",
  delay = 0,
  ...props
}: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="scale" className={className} delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
} 