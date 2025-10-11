'use client';

import { motion } from 'framer-motion';

interface FallbackBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function FallbackBackground({ mousePosition }: FallbackBackgroundProps) {
  // Fixed color scheme - elegant blue/purple
  const primaryColor = '#3b82f6'; // Blue-500
  const secondaryColor = '#8b5cf6'; // Violet-500
  const accentColor = '#06b6d4'; // Cyan-500

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)`,
      }}
    >
      {/* Simple pink cursor effect */}
      <div
        className="absolute w-16 h-16 rounded-full pointer-events-none opacity-40"
        style={{
          left: mousePosition.x - 32,
          top: mousePosition.y - 32,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      {/* Simplified static orbs */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-5"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            filter: 'blur(40px)',
          }}
        />
      ))}
    </div>
  );
}