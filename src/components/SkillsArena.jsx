import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsList } from '../data/skillsData';

const categories = [
  "All",
  "Frontend",
  "Backend & Programming",
  "AI & Machine Learning",
  "Database",
  "Tools & DevOps"
];

function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;
  const color = skill.color || '#00f2fe';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-5 h-36 rounded-2xl bg-[#121218]/90 border border-white/[0.08] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-2xl"
      style={{
        borderColor: isHovered ? `${color}60` : undefined,
        boxShadow: isHovered 
          ? `0 0 25px ${color}35, inset 0 0 15px ${color}15` 
          : '0 4px 20px rgba(0, 0, 0, 0.3)',
        transform: isHovered ? 'translateY(-4px)' : 'none'
      }}
    >
      {/* Soft Ambient Background Glow Tinted with Skill Color on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${color}25 0%, transparent 75%)`
        }}
      />

      {/* Top Border Accent Line using Skill's Official Brand Color */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`
        }}
      />

      {/* Brand Logo Icon - Grayscale by default, Original Brand Color on Hover */}
      <div className="relative mb-3 flex items-center justify-center">
        {Icon ? (
          <Icon
            className="text-4xl md:text-5xl transition-all duration-300 transform group-hover:scale-110"
            style={{
              color: isHovered ? color : '#64748b',
              filter: isHovered ? `grayscale(0%) drop-shadow(0 0 10px ${color}90)` : 'grayscale(100%)',
              opacity: isHovered ? 1 : 0.55
            }}
          />
        ) : (
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
            style={{ color: isHovered ? color : '#64748b' }}
          >
            {skill.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Label Text Tag */}
      <span 
        className="px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide transition-all duration-300 select-none"
        style={{
          color: isHovered ? '#ffffff' : '#94a3b8',
          backgroundColor: isHovered ? `${color}30` : 'rgba(255, 255, 255, 0.04)',
          border: isHovered ? `1px solid ${color}60` : '1px solid rgba(255, 255, 255, 0.06)',
          textShadow: isHovered ? `0 0 8px ${color}` : 'none'
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function SkillsArena() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skillsList 
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[400px] rounded-full bg-gradient-to-r from-accentCyan/5 via-accentBlue/5 to-accentPurple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-2"
          >
            TECHNICAL STACK
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-white mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mb-6">
            Hover over any skill card to reveal its official brand colors and glowing highlights.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full mb-8" />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-[#0e0e14] p-1.5 rounded-2xl border border-white/5 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple text-white shadow-lg shadow-accentCyan/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
