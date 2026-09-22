import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaStethoscope, 
  FaBrain, 
  FaDatabase, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaChevronLeft, 
  FaChevronRight 
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

import erpImg from '../assets/erp_preview.jpg';
import lingualabImg from '../assets/lingualab_preview.jpg';
import pneumoniaImg from '../assets/pneumonia_preview.jpg';

const projectImages = {
  "erp-management": erpImg,
  "lingua-lab": lingualabImg,
  "pneumonia-diagnosis": pneumoniaImg
};

export default function Projects() {
  const projects = portfolioData.projects || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const categoryIcons = {
    "AI & Deep Learning": <FaStethoscope className="w-4 h-4 text-accentCyan animate-pulse" />,
    "Full Stack ERP System": <FaDatabase className="w-4 h-4 text-accentPurple" />,
    "Full Stack LMS Platform": <FaGraduationCap className="w-4 h-4 text-accentBlue" />
  };

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];
  const projectImg = projectImages[currentProject.id] || erpImg;
  const isMedical = currentProject.metrics !== undefined;

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-[40%] left-[5%] w-[450px] h-[450px] rounded-full bg-accentPurple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-accentCyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-2"
          >
            PORTFOLIO SHOWCASE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full mb-6" />

          {/* Slider Navigation & Pagination Indicator */}
          <div className="flex items-center space-x-6">
            <button
              onClick={prevProject}
              className="w-11 h-11 rounded-full bg-[#121218] border border-white/10 hover:border-accentCyan text-white hover:text-accentCyan flex items-center justify-center transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transform active:scale-95"
              aria-label="Previous project"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Indicators / Tabs */}
            <div className="flex items-center space-x-3 bg-[#0e0e14] px-4 py-2 rounded-full border border-white/10">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-8 h-3 rounded-full bg-gradient-to-r from-accentCyan to-accentBlue' 
                      : 'w-3 h-3 rounded-full bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
              <span className="text-xs font-bold text-slate-400 pl-2">
                0{currentIndex + 1} / 0{projects.length}
              </span>
            </div>

            <button
              onClick={nextProject}
              className="w-11 h-11 rounded-full bg-[#121218] border border-white/10 hover:border-accentCyan text-white hover:text-accentCyan flex items-center justify-center transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transform active:scale-95"
              aria-label="Next project"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Single Frame Slider */}
        <div className="relative max-w-5xl mx-auto min-h-[540px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-panel-heavy glass-reflection p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 relative shadow-2xl overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Column: Spacious Image Preview */}
                <div className="lg:col-span-6 relative group">
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={projectImg} 
                      alt={currentProject.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30 pointer-events-none" />

                    {/* Category & Date Overlay Badges */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/15 text-xs font-bold text-accentCyan flex items-center space-x-2 shadow-lg">
                      {categoryIcons[currentProject.category] || <FaLaptopCode className="w-4 h-4 text-accentCyan" />}
                      <span className="uppercase tracking-wider">{currentProject.category}</span>
                    </div>

                    {currentProject.date && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-300 flex items-center space-x-1.5 shadow-lg">
                        <FaCalendarAlt className="w-3 h-3 text-accentBlue" />
                        <span>{currentProject.date}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Detailed Text Content */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sora text-white leading-tight mb-4 tracking-tight">
                      {currentProject.title}
                    </h3>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-inter mb-6">
                      {currentProject.description}
                    </p>

                    {/* Medical AI Performance Metrics */}
                    {isMedical && currentProject.metrics && (
                      <div className="grid grid-cols-4 gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                        <div className="text-center border-r border-white/10 pr-2">
                          <div className="text-base sm:text-xl font-extrabold font-sora text-accentCyan">{currentProject.metrics.accuracy}</div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Accuracy</div>
                        </div>
                        <div className="text-center border-r border-white/10 pr-2">
                          <div className="text-base sm:text-xl font-extrabold font-sora text-white">{currentProject.metrics.precision}</div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Precision</div>
                        </div>
                        <div className="text-center border-r border-white/10 pr-2">
                          <div className="text-base sm:text-xl font-extrabold font-sora text-white">{currentProject.metrics.recall}</div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Recall</div>
                        </div>
                        <div className="text-center">
                          <div className="text-base sm:text-xl font-extrabold font-sora text-accentCyan">{currentProject.metrics.f1Score}</div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">F1-Score</div>
                        </div>
                      </div>
                    )}

                    {/* Algorithms / Key Features list */}
                    {currentProject.algorithms && (
                      <div className="mb-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center space-x-1.5">
                          <FaBrain className="w-4 h-4 text-accentCyan" />
                          <span>Models & Algorithms</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.algorithms.map((algo) => (
                            <span key={algo} className="px-3 py-1 rounded-lg bg-[#050505]/70 border border-white/10 text-xs font-semibold text-slate-200">
                              {algo}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentProject.highlights && (
                      <div className="space-y-2.5 mb-6">
                        {currentProject.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start space-x-2.5 text-xs md:text-sm text-slate-300">
                            <FaCheckCircle className="w-4 h-4 text-accentCyan mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies Used Footer */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-accentCyan/10 border border-accentCyan/20 text-xs font-bold text-accentCyan uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
