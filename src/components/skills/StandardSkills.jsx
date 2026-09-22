import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

// Style mapping based on category names
const categoryStyles = {
  "Programming Languages": {
    glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]",
    border: "border-cyan-500/30 dark:border-accentCyan/30 hover:border-cyan-500 dark:hover:border-accentCyan",
    text: "text-cyan-600 dark:text-accentCyan",
    bg: "bg-cyan-500/5 dark:bg-accentCyan/5",
    color: "#00f2fe"
  },
  "Frontend": {
    glow: "hover:shadow-[0_0_20px_rgba(0,102,255,0.35)]",
    border: "border-accentBlue/30 dark:border-accentBlue/30 hover:border-accentBlue",
    text: "text-accentBlue",
    bg: "bg-accentBlue/5",
    color: "#0066ff"
  },
  "Backend & ML": {
    glow: "hover:shadow-[0_0_20px_rgba(127,0,255,0.35)]",
    border: "border-accentPurple/30 dark:border-accentPurple/30 hover:border-accentPurple",
    text: "text-accentPurple",
    bg: "bg-accentPurple/5",
    color: "#7f00ff"
  },
  "Database": {
    glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    border: "border-emerald-500/30 dark:border-emerald-500/30 hover:border-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/5",
    color: "#10b981"
  },
  "Tools & Platforms": {
    glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
    border: "border-amber-500/30 dark:border-amber-500/30 hover:border-amber-500",
    text: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/5",
    color: "#f59e0b"
  },
  "Soft Skills": {
    glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]",
    border: "border-pink-500/30 dark:border-pink-500/30 hover:border-pink-500",
    text: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-500/5",
    color: "#ec4899"
  }
};

export default function StandardSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.skills.map((categoryObj, idx) => {
        const styles = categoryStyles[categoryObj.category] || categoryStyles["Soft Skills"];
        const levels = categoryObj.levels || {};
        
        return (
          <motion.div
            key={categoryObj.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/5 relative overflow-hidden group shadow-lg"
          >
            {/* Hover Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accentCyan to-accentBlue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Soft Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-accentCyan/5 group-hover:bg-accentCyan/10 blur-xl transition-all pointer-events-none" />

            <h3 className="text-xl font-bold font-sora text-slate-800 dark:text-white mb-6 flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full ${styles.bg} border ${styles.border}`} />
              <span>{categoryObj.category}</span>
            </h3>

            <div className="space-y-4">
              {categoryObj.items.map((skill) => (
                <div key={skill} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span>{skill}</span>
                    <span className={styles.text}>{levels[skill] || 80}%</span>
                  </div>
                  
                  {/* Skill progress bar slider */}
                  <div className="h-1.5 w-full bg-slate-200/50 dark:bg-white/5 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${levels[skill] || 80}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${styles.color}aa, ${styles.color}ff)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
