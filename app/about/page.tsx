'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, BarChart3, Server, Brain, Zap, Rocket, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { FallbackBackground } from '@/components/fallback-background';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const skillsInView = useInView(skillsRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fixed elegant color scheme
  const primaryColor = '#3b82f6'; // Blue-500
  const secondaryColor = '#8b5cf6'; // Violet-500
  const accentColor = '#06b6d4'; // Cyan-500

  const tiltX = (mousePosition.y - 0.5) * 6; // Reduced tilt
  const tiltY = (mousePosition.x - 0.5) * -6;

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Machine Learning', level: 70 },
    { name: 'Data Analysis', level: 65 },
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive web applications using modern frameworks like React and Next.js.',
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications with Node.js, Express, and cloud services.',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Machine Learning',
      description: 'Developing predictive models and AI solutions using Python, scikit-learn, and data science libraries.',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Data Analysis',
      description: 'Extracting insights from data using Python, pandas, and visualization tools to drive decision-making.',
    },
  ];

  const achievements = [
    { icon: <Rocket className="h-6 w-6" />, title: '10+ Projects', description: 'Successfully delivered' },
    { icon: <Star className="h-6 w-6" />, title: '1.5+ Years', description: 'Experience in development' },
    { icon: <Zap className="h-6 w-6" />, title: '100%', description: 'Client satisfaction' },
    { icon: <Brain className="h-6 w-6" />, title: '24/7', description: 'Learning new technologies' },
  ];

  return (
    <>
      <FallbackBackground mousePosition={mousePosition} />
      
      <div 
        ref={containerRef} 
        className="pt-20 min-h-screen relative z-10 transition-all duration-[2000ms] ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${primaryColor}06, ${secondaryColor}03, transparent 80%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block"
              style={{
                transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h1 
                className="text-5xl sm:text-6xl font-bold mb-6 text-3d holographic"
                style={{
                  textShadow: `0 0 40px ${primaryColor}60`,
                }}
              >
                About Me
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I'm a passionate developer with a love for creating digital experiences that make a difference.
              With expertise in modern web technologies, I bring ideas to life through clean code and beautiful design.
            </motion.p>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: `0 20px 40px ${primaryColor}30`,
                }}
              >
                <Card 
                  className="glass-effect shadow-2xl transition-all duration-500 card-3d group cursor-pointer"
                  style={{
                    borderColor: `${primaryColor}20`,
                    boxShadow: `0 10px 30px ${primaryColor}15`,
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                      }}
                      whileHover={{ rotateY: 180, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <h3 
                      className="text-2xl font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card 
                className="glass-effect shadow-2xl transition-all duration-500 card-3d group"
                style={{
                  borderColor: `${primaryColor}20`,
                  boxShadow: `0 15px 40px ${primaryColor}15`,
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <motion.div 
                      className="w-3 h-3 rounded-full shadow-lg"
                      style={{
                        background: primaryColor,
                        boxShadow: `0 0 10px ${primaryColor}`,
                      }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    I'm Daivya, a dedicated software developer with 1.5+ years of experience creating innovative solutions 
                    and beautiful user experiences. Based in Bengaluru, India, I believe in the power of technology to transform ideas into 
                    reality and make a positive impact on people's lives.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    {[
                      { label: 'Location', value: 'Bengaluru, India' },
                      { label: 'Experience', value: '1.5+ Years' },
                      { label: 'Email', value: 'daivyarocks@gmail.com' },
                      { label: 'Status', value: 'Available for Projects', highlight: true },
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      >
                        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {item.label}
                        </h4>
                        <p 
                          className="font-medium text-lg"
                          style={{ color: item.highlight ? primaryColor : undefined }}
                        >
                          {item.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div 
              ref={skillsRef}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card 
                className="glass-effect shadow-2xl transition-all duration-500 card-3d"
                style={{
                  borderColor: `${primaryColor}20`,
                  boxShadow: `0 15px 40px ${primaryColor}15`,
                }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="space-y-3"
                      initial={{ opacity: 0, x: -30 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full shadow-lg"
                            style={{ 
                              background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
                            }}
                            initial={{ width: 0 }}
                            animate={skillsInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                        <motion.div 
                          className="absolute top-0 h-3 rounded-full opacity-50 blur-sm"
                          style={{ 
                            background: primaryColor,
                          }}
                          initial={{ width: 0 }}
                          animate={skillsInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div 
            ref={servicesRef}
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-bold mb-4 text-3d"
                style={{
                  textShadow: `0 0 30px ${primaryColor}50`,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="holographic">What I Do</span>
              </motion.h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                I offer a comprehensive range of development services to bring your ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -20 }}
                  animate={servicesInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 10,
                    boxShadow: `0 25px 50px ${primaryColor}25`,
                  }}
                >
                  <Card 
                    className="glass-effect shadow-2xl transition-all duration-500 card-3d group overflow-hidden cursor-pointer h-full"
                    style={{
                      borderColor: `${primaryColor}20`,
                      boxShadow: `0 10px 30px ${primaryColor}15`,
                    }}
                  >
                    <CardHeader className="text-center pb-4 relative">
                      <motion.div 
                        className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                        }}
                        whileHover={{ rotateY: 180, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                        <motion.div 
                          className="absolute inset-0 bg-white/20 rounded-3xl"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card 
              className="glass-effect shadow-2xl transition-all duration-500 card-3d"
              style={{
                borderColor: `${primaryColor}20`,
                boxShadow: `0 20px 50px ${primaryColor}15`,
              }}
            >
              <CardHeader>
                <CardTitle 
                  className="text-center text-3xl"
                  style={{
                    textShadow: `0 0 20px ${primaryColor}50`,
                  }}
                >
                  <span className="holographic">Technologies I Work With</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
                    'Python', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB', 'PostgreSQL',
                    'Git', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'Matplotlib'
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotateZ: 5,
                        boxShadow: `0 8px 25px ${primaryColor}30`,
                      }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 text-sm font-medium glass-effect transition-all duration-300 cursor-pointer"
                        style={{
                          borderColor: `${primaryColor}30`,
                          boxShadow: `0 5px 15px ${primaryColor}10`,
                        }}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}