"use client";

import React, { useState, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ParallaxTiltProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  perspective?: number;
  speed?: number;
  scale?: number;
  gyroscope?: boolean;
}

export function ParallaxTilt({
  children,
  className = "",
  tiltAmount = 10,
  perspective = 1000,
  speed = 500,
  scale = 1.05,
  gyroscope = false,
}: ParallaxTiltProps) {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configs for smoother movement
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springConfig);
  const scaleValue = useSpring(isHovering ? scale : 1, springConfig);

  // Handle mouse movements
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized position (from -0.5 to 0.5)
    const normX = (event.clientX - rect.left) / width - 0.5;
    const normY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(normX);
    y.set(normY);
  };

  // Handle device orientation for gyroscope effect
  React.useEffect(() => {
    if (!gyroscope) return;
    
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (!event.beta || !event.gamma) return;
      
      // Normalize gamma (-90 to 90) and beta (-180 to 180)
      const normGamma = (event.gamma / 90) * 0.5; // Left/Right tilt
      const normBeta = ((event.beta - 90) / 180) * 0.5; // Front/Back tilt
      
      x.set(normGamma);
      y.set(normBeta);
    };
    
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [gyroscope, x, y]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: scaleValue,
          transition: `all ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
} 