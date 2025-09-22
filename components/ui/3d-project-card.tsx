"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExternalLink, Github, Calendar, Star, GitFork } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  stats: {
    stars: number;
    forks: number;
    lastUpdated: string;
  };
  category: string;
  longDescription?: string;
}

interface ThreeDProjectCardProps {
  projects: Project[];
  featured?: boolean;
}

export default function ThreeDProjectCard({ projects, featured = false }: ThreeDProjectCardProps) {
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            {/* ✅ FIXED: The button is now INSIDE the card's div below to solve the layering issue. */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              // ✅ FIXED: Added 'relative' to create a positioning context for the close button.
              className="relative w-full max-w-4xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700"
            >
              {/* ✅ FIXED: Button moved inside and given a z-index to ensure it's always on top. */}
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex absolute top-4 right-4 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-10 w-10 shadow-lg hover:scale-110 transition-transform z-10"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                <img
                  width={400}
                  height={300}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-64 md:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 pr-4">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 mb-2"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col sm:flex-row gap-2 ml-4"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <a
                          href={active.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      
                      {active.liveUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="flex items-center gap-2"
                        >
                          <a
                            href={active.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {active.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{active.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{active.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Updated {formatDate(active.stats.lastUpdated)}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {active.longDescription || active.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <CardContainer key={project.id} className="w-full h-full">
            <CardBody className="w-full h-full">
              <motion.div
                layoutId={`card-${project.title}-${id}`}
                onClick={() => setActive(project)}
                className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 w-full h-full"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <motion.div layoutId={`image-${project.title}-${id}`}>
                    <CardItem translateZ="50" className="w-full">
                      <img
                        width={400}
                        height={250}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    </CardItem>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <CardItem translateZ="30">
                    <motion.h3
                      layoutId={`title-${project.title}-${id}`}
                      className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-3 group-hover:text-primary transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                  </CardItem>
                  
                  <CardItem translateZ="40">
                    <motion.p
                      layoutId={`description-${project.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4 overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {project.description}
                    </motion.p>
                  </CardItem>
                  
                  <CardItem translateZ="50" className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs font-medium">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </CardItem>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="flex gap-2">
                    <CardItem translateZ="60">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg border border-neutral-200 dark:border-neutral-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        <span className="text-xs font-medium">Code</span>
                      </Button>
                    </CardItem>
                    
                    {project.liveUrl && (
                      <CardItem translateZ="60">
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl!, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          <span className="text-xs font-medium">Live</span>
                        </Button>
                      </CardItem>
                    )}
                  </div>
                </div>
              </motion.div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-neutral-600 dark:text-neutral-300"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};