import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import { TbBrandAzure, TbAward } from 'react-icons/tb';
import { SiAcademia } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

const certBrandLogos = {
  "ict-azure-ai": {
    Icon: TbBrandAzure,
    color: "#0078D4",
    bg: "bg-[#0078D4]/15",
    border: "border-[#0078D4]/40",
    text: "text-[#0078D4]",
    glow: "group-hover:shadow-[0_0_25px_rgba(0,120,212,0.35)]"
  },
  "aws-workshop": {
    Icon: FaAws,
    color: "#FF9900",
    bg: "bg-[#FF9900]/15",
    border: "border-[#FF9900]/40",
    text: "text-[#FF9900]",
    glow: "group-hover:shadow-[0_0_25px_rgba(255,153,0,0.35)]"
  },
  "nptel-hci": {
    Icon: SiAcademia,
    color: "#10B981",
    bg: "bg-[#10B981]/15",
    border: "border-[#10B981]/40",
    text: "text-[#10B981]",
    glow: "group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
  }
};

export default function Certifications() {
  const certifications = portfolioData.certifications || [];

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute top-[30%] right-[10%] w-[450px] h-[450px] rounded-full bg-accentCyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-2"
          >
            VERIFIED CREDENTIALS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-white mb-4"
          >
            Certifications
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full" />
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const brand = certBrandLogos[cert.id] || {
              Icon: TbAward,
              color: "#00f2fe",
              bg: "bg-accentCyan/15",
              border: "border-accentCyan/40",
              text: "text-accentCyan",
              glow: "group-hover:shadow-[0_0_25px_rgba(0,242,254,0.35)]"
            };

            const BrandIcon = brand.Icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-2xl glass-panel p-8 border border-white/10 shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#101014]/90"
              >
                {/* Neon shadow glow tinted with brand color */}
                <div className={`absolute inset-0 rounded-2xl transition-shadow duration-500 pointer-events-none ${brand.glow}`} />

                {/* Card Top Accent Line with Brand Color */}
                <div 
                  className="absolute top-0 left-0 w-full h-[2.5px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: brand.color, boxShadow: `0 0 10px ${brand.color}` }}
                />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                  <div>
                    {/* Official Brand Logo Icon Box */}
                    <div className={`w-14 h-14 rounded-2xl ${brand.bg} border ${brand.border} flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-6 shadow-md`}>
                      <BrandIcon 
                        className="w-8 h-8 transition-transform duration-300"
                        style={{ color: brand.color, filter: `drop-shadow(0 0 6px ${brand.color}80)` }}
                      />
                    </div>

                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${brand.bg} ${brand.text} border ${brand.border} mb-3.5 inline-block`}>
                      {cert.issuer}
                    </span>

                    <h3 className="text-xl font-bold font-sora text-white mb-3 group-hover:text-accentCyan transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-slate-300 font-inter leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 group-hover:text-white transition-colors duration-300 pt-4 border-t border-white/10">
                    <FaAward style={{ color: brand.color }} />
                    <span>OFFICIAL VERIFIED CREDENTIAL</span>
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
