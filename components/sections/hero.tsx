"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ResumeModal } from '@/components/resume-modal';
import React from 'react';

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

export function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ayan_s_Resume.pdf';
    link.download = 'Ayan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image with animated border */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="rounded-full p-2 bg-gradient-to-tr from-primary to-secondary shadow-xl animate-spin-slow">
            <img
              src="/ayan.jpg"
              alt="Pathan Ayan Ali"
              className="w-48 h-48 rounded-full object-cover border-4 border-background"
            />
          </div>
        </motion.div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ayan Pathan
            </span>
          </h1>
          <div className="text-2xl text-muted-foreground mb-6 min-h-[2.5rem]">
            <Typewriter />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
            <Button
              size="lg"
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-2 text-lg px-8 py-3"
            >
              <Eye className="w-5 h-5" />
              View Resume
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={downloadResume}
              className="flex items-center gap-2 text-lg px-8 py-3"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToContact}
              className="flex items-center gap-2 text-lg px-8 py-3"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <motion.a
              href="https://github.com/ayan-x1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/pathan-ayan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:pathanayan8347@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="flex justify-center mt-8"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.button>
      </motion.div>
      <ResumeModal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)} 
      />
    </section>
  );
}