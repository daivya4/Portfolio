'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FallbackBackground } from '@/components/fallback-background';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projectsInView = useInView(projectsRef, { once: true });

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

  const categories = ['All', 'Web App', 'Machine Learning', 'API', 'Data Analysis'];

  const projects = [
    {
      title: 'Hirrd - Job Hiring Application',
      description: 'A comprehensive job hiring platform connecting employers with job seekers. Features job posting, application management, and user authentication.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Web App',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      demoUrl: 'https://github.com/daivya4/hirrd',
      githubUrl: 'https://github.com/daivya4/hirrd',
    },
    {
      title: 'AI Blog Platform',
      description: 'A modern AI-powered blog platform built with Next.js and Tailwind CSS. Features AI content generation and responsive design.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Web App',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'AI Integration'],
      demoUrl: 'https://github.com/daivya4/aiblog',
      githubUrl: 'https://github.com/daivya4/aiblog',
    },
    {
      title: 'Full Stack Chat Application',
      description: 'A real-time chat application with modern UI and seamless messaging experience. Built with JavaScript and real-time communication.',
      image: 'https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Web App',
      technologies: ['JavaScript', 'Socket.io', 'Node.js', 'Express'],
      demoUrl: 'https://github.com/daivya4/fullstack_chatapp',
      githubUrl: 'https://github.com/daivya4/fullstack_chatapp',
    },
    {
      title: 'Email Authentication System',
      description: 'A robust email authentication system using NodeMailer with TypeScript. Features secure email verification and password reset.',
      image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'API',
      technologies: ['TypeScript', 'Node.js', 'NodeMailer', 'Express'],
      demoUrl: 'https://github.com/daivya4/emailauthentication',
      githubUrl: 'https://github.com/daivya4/emailauthentication',
    },
    {
      title: 'Cancer Prediction Model',
      description: 'A machine learning model for cancer prediction using Python. Features data analysis and predictive modeling capabilities.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Machine Learning',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'Pandas'],
      demoUrl: 'https://github.com/daivya4/cancer_prediction',
      githubUrl: 'https://github.com/daivya4/cancer_prediction',
    },
    {
      title: 'Heart Disease Predictor',
      description: 'A Jupyter Notebook-based heart disease prediction system using machine learning algorithms and data analysis.',
      image: 'https://images.pexels.com/photos/4386297/pexels-photo-4386297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Machine Learning',
      technologies: ['Jupyter Notebook', 'Python', 'Scikit-learn', 'Pandas'],
      demoUrl: 'https://github.com/daivya4/heartdiseaspredictor',
      githubUrl: 'https://github.com/daivya4/heartdiseaspredictor',
    },
    {
      title: 'Chat Analysis Tool',
      description: 'A Python-based tool for analyzing chat data and extracting meaningful insights. Features text processing and data visualization.',
      image: 'https://images.pexels.com/photos/669614/pexels-photo-669614.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Data Analysis',
      technologies: ['Python', 'Data Analysis', 'Text Processing', 'Visualization'],
      demoUrl: 'https://github.com/daivya4/chat_analysis',
      githubUrl: 'https://github.com/daivya4/chat_analysis',
    },
    {
      title: 'Email Spam Detection',
      description: 'A machine learning project for detecting spam emails using Jupyter Notebook. Features classification algorithms and data preprocessing.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Machine Learning',
      technologies: ['Jupyter Notebook', 'Python', 'NLP', 'Classification'],
      demoUrl: 'https://github.com/daivya4/emailspam',
      githubUrl: 'https://github.com/daivya4/emailspam',
    },
    {
      title: 'Expense Tracker',
      description: 'A personal expense tracking application to manage and monitor financial transactions with intuitive user interface.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Web App',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
      demoUrl: 'https://github.com/daivya4/expense_tracker',
      githubUrl: 'https://github.com/daivya4/expense_tracker',
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
                className="text-5xl sm:text-6xl font-bold mb-6 text-3d"
                style={{
                  textShadow: `0 0 40px ${primaryColor}60`,
                }}
              >
                <span className="holographic">My Projects</span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Here's a collection of my 10+ projects that showcase my 1.5+ years of development experience. 
              Each one represents a unique challenge and an opportunity to create something meaningful.
            </motion.p>
          </motion.div>

          {/* Filter */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="flex items-center gap-2 glass-effect px-6 py-3 rounded-2xl"
              style={{
                borderColor: `${primaryColor}20`,
                boxShadow: `0 8px 25px ${primaryColor}15`,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Filter 
                className="h-5 w-5"
                style={{ color: primaryColor }}
              />
              <span className="text-sm font-medium">Filter:</span>
            </motion.div>
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-2xl px-6 py-3 transition-all duration-300"
                  style={{
                    backgroundColor: selectedCategory === category ? primaryColor : 'transparent',
                    borderColor: `${primaryColor}50`,
                    color: selectedCategory === category ? 'white' : primaryColor,
                    boxShadow: selectedCategory === category ? `0 8px 25px ${primaryColor}30` : `0 4px 15px ${primaryColor}10`,
                  }}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            ref={projectsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${selectedCategory}`}
                  initial={{ opacity: 0, y: 50, rotateY: -20 }}
                  animate={projectsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  exit={{ opacity: 0, y: -50, rotateY: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -15, 
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: `0 25px 50px ${primaryColor}25`,
                  }}
                  layout
                >
                  <Card 
                    className="glass-effect shadow-2xl transition-all duration-500 card-3d group overflow-hidden cursor-pointer h-full"
                    style={{
                      borderColor: `${primaryColor}20`,
                      boxShadow: `0 10px 30px ${primaryColor}15`,
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="backdrop-blur-sm"
                          style={{
                            backgroundColor: `${primaryColor}20`,
                            borderColor: `${primaryColor}50`,
                            color: primaryColor,
                          }}
                        >
                          {project.category}
                        </Badge>
                      </motion.div>
                      
                      {/* Hover overlay with buttons */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Button 
                            size="sm" 
                            className="text-white backdrop-blur-sm" 
                            asChild
                            style={{
                              background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                            }}
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Button 
                            size="sm" 
                            variant="outline" 
                            asChild
                            className="backdrop-blur-sm"
                            style={{
                              borderColor: `${primaryColor}50`,
                              color: primaryColor,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="text-xs cursor-pointer"
                              style={{
                                borderColor: `${primaryColor}30`,
                                color: primaryColor,
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
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="glass-effect shadow-2xl card-3d"
                style={{
                  borderColor: `${primaryColor}20`,
                  boxShadow: `0 20px 50px ${primaryColor}15`,
                }}
              >
                <CardContent className="py-12">
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    style={{ 
                      textShadow: `0 0 30px ${primaryColor}50`,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="holographic">Have a Project in Mind?</span>
                  </motion.h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    I'm always excited to work on new projects and collaborate with amazing people. 
                    Let's create something incredible together!
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      asChild
                      className="text-white px-10 py-6 text-lg rounded-2xl shadow-2xl transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                        boxShadow: `0 15px 40px ${primaryColor}30`,
                      }}
                    >
                      <a href="mailto:daivyarocks@gmail.com">
                        Get In Touch
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}