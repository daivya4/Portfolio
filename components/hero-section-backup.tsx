'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FallbackBackground } from './fallback-background';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const words = ['Developer', 'Designer', 'Creator', 'Innovator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" />;
  }

  // Fixed elegant color scheme
  const primaryColor = '#3b82f6'; // Blue-500
  const secondaryColor = '#8b5cf6'; // Violet-500
  const accentColor = '#06b6d4'; // Cyan-500

  const tiltX = (mousePosition.y - 0.5) * 8; // Reduced tilt intensity
  const tiltY = (mousePosition.x - 0.5) * -8;

  return (
    <>
      {/* Beautiful 2D animated background */}
      <FallbackBackground mousePosition={mousePosition} />
      
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Status Badge */}
            <div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-effect mb-8"
              style={{
                borderColor: `${primaryColor}30`,
                boxShadow: `0 0 30px ${primaryColor}20`,
              }}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ background: primaryColor }}
              />
              <span className="text-sm font-medium">Available for Projects</span>
              <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold leading-tight">
                <span className="block text-gray-800 dark:text-white mb-4">
                  Hi, I'm
                </span>
                <span 
                  className="block text-3d"
                  style={{
                    color: primaryColor,
                    textShadow: `0 0 40px ${primaryColor}60, 0 0 80px ${primaryColor}30`,
                  }}
                >
                  Daivya
                </span>
              </h1>

              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                <span className="font-semibold" style={{ color: primaryColor }}>
                  Creative{' '}
                </span>
                <span
                  className="inline-block font-bold"
                  style={{ 
                    color: accentColor,
                    textShadow: `0 0 20px ${accentColor}50`,
                  }}
                >
                  {words[currentWord]}
                </span>
                <span className="block mt-2">
                  crafting digital experiences with modern technologies
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transform: `translateZ(${mousePosition.y * 20}px) rotateX(${tiltX * 0.3}deg)`,
                }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="group relative overflow-hidden text-white border-0 px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                    boxShadow: `0 15px 40px ${primaryColor}40`,
                  }}
                >
                  <Link href="/projects">
                    <span className="relative z-10 flex items-center">
                      View My Work
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}, ${primaryColor})`,
                      }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transform: `translateZ(${mousePosition.y * 15}px) rotateX(${tiltX * -0.2}deg)`,
                }}
              >
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="glass-effect px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-xl"
                  style={{
                    borderColor: `${primaryColor}50`,
                    color: primaryColor,
                    boxShadow: `0 10px 30px ${primaryColor}20`,
                  }}
                >
                  <Link href="/about">About Me</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center space-x-8 pt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {[
                { icon: Github, href: "https://github.com/daivya4", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/daivyashah/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:daivyarocks@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl glass-effect shadow-xl group"
                  style={{
                    borderColor: `${primaryColor}30`,
                    boxShadow: `0 8px 25px ${primaryColor}20`,
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 15,
                    boxShadow: `0 15px 40px ${primaryColor}40`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <social.icon 
                    className="h-7 w-7 transition-all duration-300 group-hover:scale-110" 
                    style={{
                      color: primaryColor,
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}