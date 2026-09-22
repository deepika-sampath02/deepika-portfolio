import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import profilePhoto from '../assets/profile.jpeg';

export default function IntroScreen({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.08,
        filter: 'blur(12px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden select-none"
    >
      {/* Dynamic Animated Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-accentCyan/20 via-accentBlue/10 to-accentPurple/25 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accentCyan/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Intro Card Container */}
      <div className="relative z-10 max-w-2xl px-6 text-center flex flex-col items-center">
        
        {/* Profile Avatar Frame with Glow Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-8 group"
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-spin-slow" />
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <img 
              src={profilePhoto} 
              alt="Deepika S" 
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition duration-500"
            />
          </div>
        </motion.div>

        {/* Small Tagline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-accentCyan animate-ping" />
          <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
            WELCOME TO MY DIGITAL REALM
          </span>
        </motion.div>

        {/* Huge Main Header Background Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-sora tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentCyan via-white to-accentPurple">
              Deepika Portfolio
            </span>
          </h1>
          <p className="text-slate-400 font-inter text-sm sm:text-base font-medium max-w-md mx-auto">
            Python Full Stack Developer & AI ML Engineer
          </p>
        </motion.div>

        {/* Open Portfolio Interactive Magnetic Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4"
        >
          <button
            onClick={onOpen}
            className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple text-black font-extrabold text-base tracking-wide shadow-[0_0_30px_rgba(0,242,254,0.35)] hover:shadow-[0_0_50px_rgba(0,242,254,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Shimmer reflection animation */}
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

            <span>Open Portfolio</span>
            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Subtle Footer hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-xs font-semibold text-slate-500 tracking-wider uppercase"
        >
          Click above to explore projects, skills & experience
        </motion.div>

      </div>
    </motion.div>
  );
}
