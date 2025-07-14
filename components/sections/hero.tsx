"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import { ResumeModal } from '@/components/resume-modal';
import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import AnoAI from "@/components/ui/animated-shader-background";

// Simple typewriter effect for roles
const roles = [
  'Full Stack Web Developer',
  'MERN Stack Specialist',
  'Future Tech Innovator',
  'Clean Code Advocate',
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

export function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme || 'dark';
  const [showScrollButton, setShowScrollButton] = useState(true);

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
      {/* Particles Background */}
      <AnoAI />
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-[70vh] gap-10 md:gap-16">
        {/* Ellipse Photo Frame on Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-shrink-0 flex justify-center items-center"
        >
          <div
            className={
              `overflow-hidden border-4 shadow-lg flex items-center justify-center ` +
              (theme === 'dark'
                ? 'border-blue-400 bg-black'
                : 'border-blue-700 bg-white')
            }
            style={{ width: 170, height: 220, borderRadius: '50% / 40%' }}
          >
            <img
              src="/ayan.jpg"
              alt="Ayan's profile"
              className="object-cover w-full h-full"
              style={{ minWidth: 0, minHeight: 0 }}
            />
          </div>
        </motion.div>
        {/* Right Side: Name, Typewriter, Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
            className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight futuristic-font ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            <span className="block">
              {["Hey there,", "I'm"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.7, type: 'spring' }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.7, type: 'spring' }}
                className="inline-block bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Ayan
              </motion.span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className={`text-xl sm:text-2xl mb-8 max-w-2xl ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}
          >
            <Typewriter />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={downloadResume}
              className={`px-8 py-3 rounded-lg shadow-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 floating-cta ${theme === 'dark' ? 'bg-white text-black hover:bg-blue-200' : 'bg-black text-white hover:bg-blue-800'}`}
            >
              Download Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={goToProjects}
              className={`px-8 py-3 rounded-lg shadow-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 floating-cta ${theme === 'dark' ? 'bg-white/10 text-blue-200 hover:bg-white/20' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              View Projects
            </motion.button>
          </motion.div>
        </div>
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