import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experiences || [];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accentBlue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-2"
          >
            CAREER PATH
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-white mb-4"
          >
            Professional Experience
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="max-w-4xl mx-auto relative pl-6 md:pl-0">
          {/* Vertical central tracking line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accentCyan via-accentBlue to-accentPurple transform md:-translate-x-1/2 opacity-30" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">
                  
                  {/* Timeline center node indicator */}
                  <div className="absolute left-[-23px] md:left-1/2 w-10 h-10 rounded-full glass-panel-heavy border-2 border-accentCyan flex items-center justify-center transform md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,242,254,0.4)] bg-[#050505]">
                    <FaBriefcase className="w-4 h-4 text-accentCyan" />
                  </div>

                  {/* Left / Right Column: Company & Duration info */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`text-left ${isEven ? 'md:text-right md:pr-8' : 'md:order-2 md:text-left md:pl-8'} flex flex-col justify-center`}
                  >
                    <span className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-1">
                      {exp.type || "INTERNSHIP"}
                    </span>
                    <h4 className="text-xl font-bold font-sora text-white flex items-center space-x-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}">
                      <FaBuilding className="text-accentBlue w-4 h-4" />
                      <span>{exp.company}</span>
                    </h4>
                    <div className={`flex flex-wrap items-center gap-3 text-xs text-slate-400 font-semibold mt-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-accentCyan" />
                        <span>{exp.duration}</span>
                      </span>
                      {exp.location && (
                        <span className="flex items-center space-x-1">
                          <FaMapMarkerAlt className="text-accentPurple" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* Role & Responsibilities Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`glass-panel p-6 md:p-8 rounded-2xl border border-white/10 relative shadow-lg ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple" />
                    
                    <h3 className="text-xl md:text-2xl font-bold font-sora text-white mb-4">{exp.role}</h3>

                    {/* Responsibilities list */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <FaCheckCircle className="w-4 h-4 text-accentCyan mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300 leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
