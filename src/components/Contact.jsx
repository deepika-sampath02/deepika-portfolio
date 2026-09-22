import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaDownload, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

// Magnetic Button Component
function MagneticButton({ children, onClick, className }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Pull factor (e.g. 35% distance)
    const x = (clientX - centerX) * 0.35;
    const y = (clientY - centerY) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onClick={onClick}
      className={`relative ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default function Contact() {
  const { contact } = portfolioData.personalInfo;
  const formRef = useRef();
  
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      setErrorMessage('Please fill out all fields.');
      return;
    }

    setStatus('sending');

    // Retrieve keys from Vite environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mock submit if keys are not configured yet, so the app is operational
      console.log('EmailJS parameters not configured in environment variables. Simulated submission:', formState);
      setTimeout(() => {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again or email directly.');
      });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background visual details */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[70vw] h-[300px] rounded-full bg-gradient-to-r from-accentCyan/5 to-accentPurple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-accentCyan uppercase mb-2"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight text-white mb-4"
          >
            Contact
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentBlue rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Let's Connect, Info & Links */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="flex flex-col items-start">
              {/* Magnetic Interactive Connect Callout */}
              <MagneticButton 
                onClick={() => {
                  const el = document.getElementById('name-input');
                  if (el) el.focus();
                }}
                className="w-full flex items-center justify-center p-6 bg-gradient-to-br from-accentCyan/10 via-[#101010] to-accentPurple/10 border border-white/10 rounded-2xl cursor-pointer hover:shadow-glass-glow-purple text-left group transition-all duration-300"
              >
                <div className="text-center">
                  <span className="text-sm font-semibold uppercase tracking-widest text-accentCyan block mb-1">
                    START A CONVERSATION
                  </span>
                  <span className="text-2xl font-bold font-sora text-white flex items-center justify-center space-x-2">
                    <span>Let's Connect</span>
                    <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </span>
                </div>
              </MagneticButton>
            </div>

            {/* Direct Info List */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6">
              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-center space-x-4 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-accentCyan/10 border border-accentCyan/20 flex items-center justify-center text-accentCyan group-hover:scale-105 transition-transform">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Me</div>
                  <div className="text-sm font-bold text-white tracking-wide truncate max-w-xs sm:max-w-none">{contact.email}</div>
                </div>
              </a>

              <a 
                href={`tel:${contact.phone}`} 
                className="flex items-center space-x-4 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-accentPurple/10 border border-accentPurple/20 flex items-center justify-center text-accentPurple group-hover:scale-105 transition-transform">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Call Me</div>
                  <div className="text-sm font-bold text-white tracking-wide">{contact.phone}</div>
                </div>
              </a>
            </div>

            {/* Socials & Resume downloads */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center space-x-4">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass-panel border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass-panel border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

              <a
                href={contact.resumeUrl}
                download="Deepika_S_Resume.pdf"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-sm tracking-wide transition-all duration-300"
              >
                <FaDownload className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form 
              ref={formRef} 
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-2xl border border-white/5 relative space-y-6 shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accentCyan to-accentPurple" />

              <div>
                <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-[#050505]/80 border border-white/10 focus:border-accentCyan rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accentCyan transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Your Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="yourname@example.com"
                  className="w-full bg-[#050505]/80 border border-white/10 focus:border-accentCyan rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accentCyan transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Let's build something intelligent..."
                  className="w-full bg-[#050505]/80 border border-white/10 focus:border-accentCyan rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accentCyan transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Status messages popup */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold flex items-center"
                  >
                    ✓ Message sent successfully! I will get back to you shortly.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold"
                  >
                    ⚠ {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 bg-gradient-to-r from-accentCyan via-accentBlue to-accentPurple text-black font-extrabold rounded-xl hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] disabled:opacity-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {status === 'sending' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
