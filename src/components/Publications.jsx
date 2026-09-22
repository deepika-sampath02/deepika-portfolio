import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookReader, FaFileAlt, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaQuoteLeft } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Publications() {
  const publications = portfolioData.publications;
  const [expandedIdx, setExpandedIdx] = useState(null);

  if (!publications || publications.length === 0) return null;

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="publications" className="relative py-24 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-accentCyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-2"
          >
            PEER REVIEWED RESEARCH
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Publications
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full" />
        </div>

        {/* Publications Presentation Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel-heavy p-8 rounded-2xl border border-slate-200 dark:border-white/10 relative shadow-glass overflow-hidden group"
              >
                {/* Visual Top Highlight Bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accentPurple via-accentBlue to-accentCyan" />

                <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                  {/* Left Column: Scholarly Badge icon */}
                  <div className="w-14 h-14 rounded-xl bg-accentPurple/10 border border-accentPurple/25 flex items-center justify-center flex-shrink-0 text-accentPurple shadow-lg">
                    <FaBookReader className="w-7 h-7" />
                  </div>

                  {/* Right Column: Paper Meta & Text */}
                  <div className="flex-1 space-y-4">
                    <div>
                      {/* Journal Header Tag */}
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-accentPurple/10 border border-accentPurple/20 text-accentPurple mb-3 inline-block">
                        Journal Article (Peer-Reviewed)
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-bold font-sora text-slate-800 dark:text-white leading-snug group-hover:text-accentCyan transition-colors duration-300">
                        {pub.title}
                      </h3>
                      
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                        Authors: <strong className="text-slate-700 dark:text-slate-200">Deepika S.</strong>, et al.
                      </p>
                    </div>

                    {/* Publication details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-y border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400">
                      <div>
                        <span className="block font-bold text-slate-500 uppercase tracking-wider mb-0.5">Journal</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{pub.journal}</span>
                      </div>
                      <div>
                        <span className="block font-bold text-slate-500 uppercase tracking-wider mb-0.5">Published Date</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{pub.date}</span>
                      </div>
                      <div>
                        <span className="block font-bold text-slate-500 uppercase tracking-wider mb-0.5">DOI Code</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{pub.doi}</span>
                      </div>
                    </div>

                    {/* Collapsible Abstract Panel */}
                    <div className="bg-slate-100/50 dark:bg-black/25 rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden">
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="w-full px-5 py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <span className="flex items-center space-x-2">
                          <FaFileAlt className="text-accentCyan" />
                          <span>View Abstract Summary</span>
                        </span>
                        {isExpanded ? <FaChevronUp className="w-3.5 h-3.5" /> : <FaChevronDown className="w-3.5 h-3.5" />}
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 font-inter leading-relaxed italic border-t border-slate-200 dark:border-white/5 pt-3 flex space-x-3">
                              <FaQuoteLeft className="text-accentPurple/40 w-5 h-5 flex-shrink-0" />
                              <span>{pub.abstract}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-accentCyan to-accentBlue text-black font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span>View Publication Source</span>
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
