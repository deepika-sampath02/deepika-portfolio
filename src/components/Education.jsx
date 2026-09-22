import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBookReader } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData.personalInfo;

  return (
    <section id="education" className="relative py-24 overflow-hidden">
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
            ACADEMIC FOUNDATION & QUALIFICATION
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-white"
          >
            Education
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full mt-4" />
        </div>

        {/* Education Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel-heavy glass-reflection p-8 md:p-12 rounded-2xl relative shadow-glass overflow-hidden max-w-4xl mx-auto space-y-8"
        >
          {/* Glowing top border edge */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple" />

          {/* Academic Degree Info Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start space-x-5">
              {/* Graduation Cap Badge */}
              <div className="w-14 h-14 rounded-2xl bg-accentPurple/15 border border-accentPurple/30 flex items-center justify-center flex-shrink-0 text-accentPurple shadow-lg">
                <FaGraduationCap className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-1.5 inline-block">
                  {education.degree}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-extrabold font-sora text-white mb-2 tracking-tight">
                  {education.major}
                </h3>
                
                <p className="text-slate-300 font-semibold text-base mb-4 leading-relaxed">
                  {education.institution}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <FaCalendarAlt className="text-accentCyan" />
                    <span>{education.duration}</span>
                  </span>
                  {education.location && (
                    <span className="flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <FaMapMarkerAlt className="text-accentPurple" />
                      <span>{education.location}</span>
                    </span>
                  )}
                  <span className="flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <FaAward className="text-accentBlue" />
                    <span>First Class Distinction</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Academic CGPA Badge */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center w-full md:w-auto shadow-inner">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Academic CGPA</span>
              <span className="text-4xl font-extrabold font-sora text-transparent bg-clip-text bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple">
                {education.cgpa}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold mt-1">Out of 10.0 Scale</span>
            </div>
          </div>

          {/* Key Academic Focus Badges */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center space-x-2">
              <FaBookReader className="text-accentCyan" />
              <span>Core Academic Specializations</span>
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-accentCyan/40 hover:text-white transition-colors">
                Artificial Intelligence & Machine Learning
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-accentPurple/40 hover:text-white transition-colors">
                Deep Learning & Computer Vision
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-accentBlue/40 hover:text-white transition-colors">
                Database Management Systems & SQL
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-emerald-400/40 hover:text-white transition-colors">
                Full Stack Web Development
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
