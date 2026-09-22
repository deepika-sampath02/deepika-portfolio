import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { email, github, linkedin } = portfolioData.personalInfo.contact;

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/5 py-16 bg-[#050505] text-slate-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-3.5 relative z-10">
        
        {/* Line 1: Title */}
        <h3 className="text-xl md:text-2xl font-bold font-sora text-white tracking-wide">
          Portfolio of Deepika.S
        </h3>

        {/* Line 2: Email | GitHub | LinkedIn */}
        <div className="text-sm md:text-base font-inter flex flex-wrap items-center justify-center gap-2 text-slate-300">
          <a 
            href={`mailto:${email}`} 
            className="hover:text-white transition-colors duration-200"
          >
            {email}
          </a>
          <span className="text-slate-600 font-bold">|</span>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accentBlue hover:text-accentCyan transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-slate-600 font-bold">|</span>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accentPurple hover:text-accentCyan transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Line 3: Copyright */}
        <p className="text-sm text-slate-400 font-inter pt-1">
          Hand-crafted by Deepika.S | 2026 &copy;
        </p>

        {/* Floating Back to Top Scroll Button */}
        <button
          onClick={handleScrollTop}
          className="absolute right-6 bottom-8 w-10 h-10 rounded-full glass-panel border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-accentCyan transition-all duration-300 hover:-translate-y-1 shadow-lg"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
