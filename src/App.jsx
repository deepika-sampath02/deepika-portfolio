import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import SkillsArena from './components/SkillsArena';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const { scrollYProgress } = useScroll();
  
  // Custom reading scroll progress indicator bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track cursor position for ambient hover glow spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Prevent background scrolling while IntroScreen is open
  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isEntered]);

  // Update HTML class list on theme change
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-800 dark:text-slate-300 transition-colors duration-300 select-none overflow-x-hidden">
      
      {/* Intro Landing Splash Screen Overlay */}
      <AnimatePresence mode="wait">
        {!isEntered && (
          <IntroScreen key="intro-screen" onOpen={() => setIsEntered(true)} />
        )}
      </AnimatePresence>

      {/* Dynamic Reading Scroll Indicator Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* GPU Accelerated Mouse spotlight highlight (Desktop only) */}
      <div 
        className="hidden md:block fixed pointer-events-none z-10 w-[600px] h-[600px] rounded-full bg-radial-gradient-glow from-accentCyan/5 via-accentPurple/2 to-transparent blur-[120px] transition-transform duration-75 ease-out dark:opacity-100 opacity-30"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
          willChange: 'transform'
        }}
      />

      {/* Sticky Top Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Single Page Contents */}
      <main className="relative z-20">
        <Hero />
        <Education />
        <SkillsArena />
        <Projects />
        <Experience />
        <Certifications />
        <Publications />
        <Contact />
      </main>

      {/* Page bottom Footer */}
      <Footer />
    </div>
  );
}

