import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Matter from 'matter-js';
import usePhysicsSkills from '../../hooks/usePhysicsSkills';
import { FaTimes, FaBrain, FaAward, FaBolt } from 'react-icons/fa';

export default function PhysicsSkills({ skills, isMobile, isTablet, viewMode }) {
  const sceneRef = useRef(null);
  const reactBodyRef = useRef(null);
  const clickStartRef = useRef({ x: 0, y: 0 });

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const [handPos, setHandPos] = useState({ x: -100, y: -100 });
  const [handState, setHandState] = useState('moving'); // 'moving' | 'grabbing' | 'done'

  // Connect Matter.js physics engine via custom hook
  usePhysicsSkills({
    sceneRef,
    skills,
    viewMode,
    isMobile,
    isTablet,
    onReactBodyCreated: (body) => {
      reactBodyRef.current = body;
    }
  });

  // Onboarding/Tutorial Pointer Simulation
  useEffect(() => {
    if (viewMode !== 'interactive' || !sceneRef.current) return;

    const startAnimation = setTimeout(() => {
      const container = sceneRef.current;
      if (!container) return;

      const rectBody = reactBodyRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Start position: center-bottom of canvas
      const startX = width / 2;
      const startY = height - 60;
      setHandPos({ x: startX, y: startY });

      // Animate hand moving to the React body
      let currentX = startX;
      let currentY = startY;
      const steps = 30;
      let step = 0;

      const interval = setInterval(() => {
        if (!rectBody) {
          clearInterval(interval);
          setHandState('done');
          return;
        }

        const targetX = rectBody.position.x;
        const targetY = rectBody.position.y;

        // Linear interpolation
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        setHandPos({ x: currentX, y: currentY });

        step++;
        
        // When we are close to the target
        const dist = Math.hypot(targetX - currentX, targetY - currentY);
        if (dist < 15 || step > steps) {
          clearInterval(interval);
          setHandState('grabbing');

          // Grab, drag slightly to the right, and apply a physical impulse in Matter.js
          setTimeout(() => {
            if (rectBody) {
              // Apply velocity impulse
              Matter.Body.setVelocity(rectBody, { x: isMobile ? 6 : 10, y: -5 });
            }
            
            // Drag the hand visual slightly to the right
            setHandPos(prev => ({ x: prev.x + 40, y: prev.y - 20 }));

            // Fade out the hand pointer and instructions
            setTimeout(() => {
              setHandState('done');
              // Hide tutorial hint after a delay
              setTimeout(() => setShowTutorial(false), 3000);
            }, 600);
          }, 400);
        }
      }, 50);
    }, 1500);

    return () => {
      clearTimeout(startAnimation);
    };
  }, [viewMode, isMobile]);

  // Click event logic (only triggers if the user clicks without dragging)
  const handleMouseDown = (e) => {
    clickStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = (e, skill) => {
    const endX = e.clientX;
    const endY = e.clientY;
    const dist = Math.hypot(endX - clickStartRef.current.x, endY - clickStartRef.current.y);
    
    // Treat as click only if movement is tiny (drag threshold)
    if (dist < 6) {
      setSelectedSkill(skill);
    }
  };

  const handleTouchStart = (e, skill) => {
    const touch = e.touches[0];
    clickStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e, skill) => {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;
    const dist = Math.hypot(endX - clickStartRef.current.x, endY - clickStartRef.current.y);
    
    if (dist < 6) {
      setSelectedSkill(skill);
    }
  };

  return (
    <div className="relative w-full">
      {/* Tutorial Instruction Hint */}
      <AnimatePresence>
        {showTutorial && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm font-semibold tracking-wide text-cyan-600 dark:text-accentCyan mb-4 flex items-center justify-center space-x-2"
          >
            <FaBolt className="animate-bounce text-amber-500" />
            <span>✦ Grab, drag, and throw my skills around. Click for details!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Physics Container Window */}
      <div 
        ref={sceneRef} 
        className="relative w-full rounded-2xl glass-panel-heavy overflow-hidden shadow-glass border border-slate-200 dark:border-white/10 select-none cursor-grab active:cursor-grabbing"
        style={{
          height: isMobile ? '380px' : isTablet ? '440px' : '520px',
        }}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        
        {/* Soft Ambient Glow */}
        <div className="absolute top-[20%] left-[30%] w-[150px] h-[150px] rounded-full bg-accentCyan/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] right-[30%] w-[150px] h-[150px] rounded-full bg-accentPurple/5 blur-3xl pointer-events-none" />

        {/* Physics pills floating around */}
        {skills.map((skill, idx) => {
          const isReact = skill.name === 'React.js';
          return (
            <div
              key={`${skill.name}-${idx}`}
              onMouseDown={handleMouseDown}
              onMouseUp={(e) => handleMouseUp(e, skill)}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, skill)}
              className={`skill-pill-physics absolute px-4 py-2 border rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center pointer-events-auto cursor-pointer select-none transition-shadow ${skill.styles.border} ${skill.styles.text} ${skill.styles.bg} ${skill.styles.glow} shadow-sm`}
              style={{
                left: 0,
                top: 0,
                transform: 'translate3d(-500px, 0px, 0) rotate(0rad)',
                willChange: 'transform',
                touchAction: 'none' // Disable mobile gestures on pills
              }}
            >
              {skill.name}
            </div>
          );
        })}

        {/* Onboarding Pointer Hand Visual */}
        {handState !== 'done' && (
          <motion.div
            className="absolute pointer-events-none z-30 text-3xl select-none"
            style={{
              left: handPos.x - 12,
              top: handPos.y - 12,
            }}
            animate={{
              scale: handState === 'grabbing' ? [1, 0.8, 1.1] : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            👆
          </motion.div>
        )}
      </div>

      {/* Details Card Modal overlay */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-[#101010] border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl glass-reflection"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Highlight bar */}
              <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${selectedSkill.styles.color === '#00f2fe' ? 'from-accentCyan to-accentBlue' : selectedSkill.styles.color === '#7f00ff' ? 'from-accentPurple to-pink-500' : 'from-emerald-400 to-teal-600'}`} style={{ backgroundColor: selectedSkill.styles.color }} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                aria-label="Close details"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 ${selectedSkill.styles.text} mb-3 inline-block`}>
                    {selectedSkill.category}
                  </span>
                  <h3 className="text-2xl font-bold font-sora text-slate-800 dark:text-white">
                    {selectedSkill.name}
                  </h3>
                </div>

                {/* Skill bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span>Proficiency Level</span>
                    <span className={selectedSkill.styles.text}>{selectedSkill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${selectedSkill.styles.color}aa, ${selectedSkill.styles.color}ff)`
                      }}
                    />
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/5 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-2.5">
                    <FaAward className="text-accentCyan w-4 h-4" />
                    <span>Validated in institutional LMS & ERP systems</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <FaBrain className="text-accentPurple w-4 h-4" />
                    <span>Applied in production-ready responsive frontends</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
