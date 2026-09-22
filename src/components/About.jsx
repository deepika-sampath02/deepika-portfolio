import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { summary, about, education } = portfolioData.personalInfo;

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[70vw] h-[350px] rounded-full bg-gradient-to-r from-accentCyan/5 via-accentBlue/5 to-accentPurple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-2"
          >
            DISCOVER MY STORY & ACADEMICS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-white"
          >
            About Me
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full mt-4" />
        </div>

        {/* About & Education Merged Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel-heavy glass-reflection p-8 md:p-12 rounded-2xl relative shadow-glass overflow-hidden max-w-5xl mx-auto space-y-10"
        >
          {/* Neon glowing top border edge */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple" />

          {/* Top Row: Bio Summary */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-sora text-white flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accentCyan shadow-[0_0_10px_#00f2fe]" />
              <span>Python Full Stack & AI ML Engineer</span>
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-inter">
              {summary || about}
            </p>
          </div>

          {/* Integrated Education & Academic Foundation Block */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accentCyan mb-6 flex items-center space-x-2">
              <FaGraduationCap className="w-4 h-4 text-accentCyan" />
              <span>Academic Foundation</span>
            </h4>

            <div className="glass-panel p-6 md:p-8 rounded-xl border border-white/5 relative overflow-hidden bg-white/[0.02]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accentPurple/10 border border-accentPurple/25 flex items-center justify-center flex-shrink-0 text-accentPurple shadow-lg">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-1 inline-block">
                      {education.degree}
                    </span>
                    <h5 className="text-xl font-bold font-sora text-white mb-1">
                      {education.major}
                    </h5>
                    <p className="text-slate-300 font-semibold text-sm mb-3">
                      {education.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                      <span className="flex items-center space-x-1.5">
                        <FaCalendarAlt className="text-accentCyan" />
                        <span>{education.duration}</span>
                      </span>
                      {education.location && (
                        <span className="flex items-center space-x-1.5">
                          <FaMapMarkerAlt className="text-accentPurple" />
                          <span>{education.location}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Academic CGPA Badge */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-white/5 min-w-[140px] text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Academic CGPA</span>
                  <span className="text-3xl font-extrabold font-sora text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentBlue">
                    {education.cgpa}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold mt-0.5">Out of 10.0 Scale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Competency Badges */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-white/5">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-accentCyan/40 hover:text-white transition-colors">
              Full Stack Architecture
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-accentPurple/40 hover:text-white transition-colors">
              AI & Deep Learning
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-accentBlue/40 hover:text-white transition-colors">
              Database Management & SQL
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-emerald-400/40 hover:text-white transition-colors">
              REST API Integration
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
