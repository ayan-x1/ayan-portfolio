"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';
import { ResumeModal } from '@/components/resume-modal';
import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

// Simple typewriter effect for roles
const roles = [
  'Full Stack Developer',
  'MERN Enthusiast',
  'Open Source Contributor',
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [char, setChar] = useState(0);

  React.useEffect(() => {
    if (char < roles[index].length) {
      const timeout = setTimeout(() => {
        setDisplayed(roles[index].slice(0, char + 1));
        setChar(char + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setChar(0);
        setDisplayed('');
        setIndex((index + 1) % roles.length);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [char, index]);

  return (
    <span className="text-primary font-semibold">{displayed}<span className="animate-pulse">|</span></span>
  );
}

const SpaceCanvas = dynamic(() => import('./SpaceCanvas'), { ssr: false });

export function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme || 'dark';

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ayan_s_Resume.pdf';
    link.download = 'Ayan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={
      `relative min-h-screen flex items-center justify-center overflow-hidden ` +
      (theme === 'dark' ? 'bg-black' : 'bg-white')
    }>
      {/* 3D Starfield Background */}
      <div className="absolute inset-0 z-0">
        <SpaceCanvas />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center min-h-[70vh] text-center">
        {/* Profile Photo with Professional Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div
            className={
              `rounded-full border-4 shadow-lg overflow-hidden flex items-center justify-center ` +
              (theme === 'dark'
                ? 'border-blue-400 bg-black'
                : 'border-blue-700 bg-white')
            }
            style={{ width: 128, height: 128 }}
          >
            <img
              src="/ayan.jpg"
              alt="Ayan's profile"
              className="object-cover w-full h-full"
              style={{ minWidth: 0, minHeight: 0 }}
            />
          </div>
        </motion.div>
        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className={
            `text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight futuristic-font ` +
            (theme === 'dark' ? 'text-white' : 'text-black')
          }
        >
          Hi, I'm{' '}
          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            style={{ color: theme === 'dark' ? '#60a5fa' : '#1d4ed8', display: 'inline-block' }}
            className="drop-shadow-lg"
          >
            Ayan
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={
            `text-xl sm:text-2xl mb-8 max-w-2xl mx-auto ` +
            (theme === 'dark' ? 'text-blue-200' : 'text-blue-700')
          }
        >
          A Frontend Developer building the future, one pixel at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={downloadResume}
            className={
              `px-8 py-3 rounded-lg shadow-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 floating-cta ` +
              (theme === 'dark'
                ? 'bg-white text-black hover:bg-blue-200'
                : 'bg-black text-white hover:bg-blue-800')
            }
          >
            Download Resume
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={goToProjects}
            className={
              `px-8 py-3 rounded-lg shadow-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 floating-cta ` +
              (theme === 'dark'
                ? 'bg-white/10 text-blue-200 hover:bg-white/20'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200')
            }
          >
            View Projects
          </motion.button>
        </motion.div>
        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex justify-center mt-10"
        >
          <button
            aria-label="Scroll to About"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full p-2 bg-white/20 hover:bg-blue-400/30 transition-colors border border-blue-300 dark:bg-black/30 dark:hover:bg-blue-500/30 dark:border-blue-500 shadow-lg"
            style={{ outline: 'none' }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDown size={32} className={theme === 'dark' ? 'text-blue-300' : 'text-blue-700'} />
            </motion.div>
          </button>
        </motion.div>
      </div>
      <ResumeModal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)} 
      />
      <style jsx global>{`
        .futuristic-font {
          font-family: 'Orbitron', 'Montserrat', 'Segoe UI', Arial, sans-serif;
          letter-spacing: 0.04em;
        }
        .floating-cta {
          animation: floating 3s ease-in-out infinite;
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}