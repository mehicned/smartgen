"use client";

import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

interface ParticlesBackgroundProps {
  className?: string;
  quantity?: number;
  color?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  connected?: boolean;
  connectDistance?: number;
  responsive?: boolean;
}

export function ParticlesBackground({
  className = "",
  quantity = 50,
  color = "#9DB946",
  background = "transparent",
  minSize = 1,
  maxSize = 4,
  minSpeed = 0.1,
  maxSpeed = 0.5,
  minOpacity = 0.1,
  maxOpacity = 0.5,
  connected = true,
  connectDistance = 100,
  responsive = true,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mousePosition = useRef<{ x: number; y: number } | null>(null);

  // Initialize particles on mount
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resizeCanvas = () => {
      if (!canvasRef.current || !containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      
      // Reset particles when canvas is resized
      initParticles();
    };
    
    // Initialize particles
    const initParticles = () => {
      if (!canvasRef.current) return;
      
      const { width, height } = canvasRef.current;
      const particles: Particle[] = [];
      
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: minSize + Math.random() * (maxSize - minSize),
          speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
          speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
          color,
          opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
        });
      }
      
      particlesRef.current = particles;
    };
    
    // Set up animation
    const animate = () => {
      if (!canvasRef.current || !ctx) return;
      
      const { width, height } = canvasRef.current;
      
      // Clear canvas
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > height) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.opacity})`;
        ctx.fill();
        
        // Connect particles
        if (connected) {
          particlesRef.current.forEach((particle2, j) => {
            if (i === j) return;
            
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectDistance) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${hexToRgb(particle.color)}, ${0.2 * (1 - distance / connectDistance)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          });
          
          // Connect to mouse
          if (mousePosition.current) {
            const dx = particle.x - mousePosition.current.x;
            const dy = particle.y - mousePosition.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectDistance * 1.5) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${hexToRgb(particle.color)}, ${0.3 * (1 - distance / (connectDistance * 1.5))})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
              ctx.stroke();
            }
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Convert hex color to RGB format
    const hexToRgb = (hex: string): string => {
      // Remove # if present
      hex = hex.replace('#', '');
      
      // Parse hex values
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      return `${r}, ${g}, ${b}`;
    };
    
    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };
    
    // Handle mouse leave
    const handleMouseLeave = () => {
      mousePosition.current = null;
    };
    
    // Set up event listeners
    window.addEventListener("resize", resizeCanvas);
    if (responsive) {
      window.addEventListener("mousemove", handleMouseMove);
      canvasRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
    
    // Initialize and start animation
    resizeCanvas();
    animationRef.current = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (responsive) {
        window.removeEventListener("mousemove", handleMouseMove);
        canvasRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    quantity,
    color,
    background,
    minSize,
    maxSize,
    minSpeed,
    maxSpeed,
    minOpacity,
    maxOpacity,
    connected,
    connectDistance,
    responsive,
  ]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
} 