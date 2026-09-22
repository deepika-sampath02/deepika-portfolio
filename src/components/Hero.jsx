import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpeg';

const words = [
  "Python Full Stack Developer",
  "Python Django Developer",
  "Associate Software Engineer Python",
  "AI ML Engineer"
];

export default function Hero() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = words[currentWordIdx];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(200);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Aurora Effect */}
      <div className="absolute inset-0 aurora-bg opacity-75 z-0" />
      
      {/* Moving Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      
      {/* Ambient Gradient Highlights */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-accentBlue/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-accentPurple/10 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm font-semibold text-accentCyan border border-accentCyan/20 tracking-wider mb-6">
              WELCOME TO MY PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold font-sora tracking-tight leading-tight text-white mb-4"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accentCyan to-accentPurple">
              Deepika S
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-10 mb-6 flex items-center"
          >
            <span className="text-xl md:text-2xl font-medium font-inter text-slate-300">
              I am a{' '}
              <span className="font-semibold text-accentCyan border-r-2 border-accentCyan pr-1 animate-pulse">
                {currentText}
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
          >
            Passionate AI & Data Science graduate with expertise in Python, Machine Learning, Deep Learning, React.js, Django, FastAPI, and modern web technologies. I enjoy building intelligent applications and scalable software solutions that solve real-world problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-8 py-3.5 bg-gradient-to-r from-accentCyan to-accentBlue text-black font-semibold rounded-lg hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <a
              href="/Deepika_S_Resume.pdf"
              download="Deepika_S_Resume.pdf"
              className="px-8 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg text-center hover:bg-white/10 hover:shadow-glass transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-8 py-3.5 bg-transparent border border-accentPurple/30 hover:border-accentPurple text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(127,0,255,0.2)]"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Column: Hero Profile Image Frame */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            {/* Pulsing Backglow Panel */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accentCyan to-accentPurple opacity-20 blur-2xl animate-pulse-slow" />
            
            {/* Premium Circular Glass Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2.5 glass-panel-heavy circle-glass-glow flex items-center justify-center overflow-hidden">
              <img
                src={profilePhoto}
                alt="Deepika S"
                className="w-full h-full object-cover rounded-full filter saturate-[1.05]"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
