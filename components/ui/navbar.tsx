'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  // Fixed elegant color scheme
  const primaryColor = '#3b82f6'; // Blue-500
  const accentColor = '#06b6d4'; // Cyan-500

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backdropFilter: scrolled ? 'blur(25px)' : 'none',
        boxShadow: scrolled ? `0 8px 32px ${primaryColor}10` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/" 
              className="text-2xl font-bold transition-all duration-300 text-3d"
              style={{
                color: primaryColor,
                textShadow: `0 0 20px ${primaryColor}50`,
              }}
            >
              Daivya
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 group ${
                    pathname === item.href
                      ? 'font-semibold glass-effect'
                      : 'hover:glass-effect'
                  }`}
                  style={{
                    color: pathname === item.href ? primaryColor : undefined,
                    borderColor: pathname === item.href ? `${primaryColor}30` : 'transparent',
                    boxShadow: pathname === item.href ? `0 0 20px ${primaryColor}20` : undefined,
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {pathname === item.href && (
                    <motion.div 
                      className="absolute bottom-1 left-2 right-2 h-0.5 rounded-full"
                      style={{ background: primaryColor }}
                      layoutId="activeTab"
                      initial={false}
                      animate={{
                        boxShadow: `0 0 10px ${primaryColor}60`,
                      }}
                    />
                  )}
                  
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}10, ${accentColor}05)`,
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="sm"
                className="p-3 rounded-xl glass-effect card-3d"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  borderColor: `${primaryColor}30`,
                  boxShadow: `0 4px 15px ${primaryColor}20`,
                }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" style={{ color: primaryColor }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" style={{ color: primaryColor }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4 space-y-2 glass-effect rounded-2xl mt-2 mx-2"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                borderColor: `${primaryColor}20`,
                boxShadow: `0 8px 32px ${primaryColor}20`,
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-6 py-3 rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? 'font-semibold glass-card'
                        : 'hover:glass-card'
                    }`}
                    style={{
                      color: pathname === item.href ? primaryColor : undefined,
                      boxShadow: pathname === item.href ? `0 0 20px ${primaryColor}20` : undefined,
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}