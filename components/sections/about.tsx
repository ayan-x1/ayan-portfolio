"use client";

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IconCloud } from "@/components/magicui/icon-cloud";

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React', 'Next', 'TypeScript', 'Tailwind CSS', 'Vue', 'Angular'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'ASP.NET Core', 'Express', 'FastAPI' ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    technologies: ['React Native', 'iOS', 'Android', 'Expo' ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'Tools',
    icon: Code,
    technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    category: 'Design',
    icon: Palette,
    technologies: ['UI/UX', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    color: 'from-pink-500 to-rose-500'
  }
];

const iconCloudSlugs = [
  "typescript",
  "javascript",
  "python",
  "cplusplus",
  "react",
  "nextdotjs",
  "html5",
  "tailwindcss", // Replaced css3
  "nodedotjs",
  "express",
  "postgresql",
  "mongodb",
  "redis",
  "prisma",
  "firebase",
  "vercel",
  "docker",
  "nginx",
  "git",
  "github",
  "gitlab",
  "android",
  "flutter",
  "figma",
  "androidstudio",
  "jest",
  // Remove visualstudiocode entirely as it doesn't exist in Simple Icons
];

const experiences = [
  {
    title: 'TatvaSoft – 15-Day Summer Internship Program',
    company: 'Project Repository | Certificate',
    period: '26 May – 13 June 2025',
    links: {
      repository: 'https://github.com/ayan-x1/TatvaSoft-15_days-Summer-Internship-2025',
    },
    description: (
      <>
        <ul className="list-disc pl-5">
          <li>Completed a structured 15-day internship at TatvaSoft, practicing real-world full-stack development.</li>
          <li>Daily assignments included building robust front-end components with <b>Angular</b> and implementing business logic, RESTful services and data models in <b>ASP.NET Core</b>.</li>
          <li>Developed and tested APIs using Swagger UI, allowing easy exploration, validation, and documentation of endpoints.</li>
          <li>Deployed applications on a cloud hosting platform (e.g., Azure/AWS/Netlify), with live links and CI/CD workflow configured.</li>
          <li>Tech stack: ASP.NET Core, Angular, TypeScript, HTML5, SCSS, SQL Server; Tooling: Swagger, Git, VS Code.</li>
          <li>Gained experience in component-based UI design, form handling, HTTP client integration, debugging Angular services, and modular project architecture.</li>
        </ul>
      </>
    )
  }
];

export function About() {
  const images = iconCloudSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: About and Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Third-year B.Tech student in Information Technology with extensive hands-on experience in full-stack web and application development. Passionate about building robust, scalable, and user-centric platforms using modern technologies such as React.js, React-Native, Node.js, Express.js, and PostgreSQL. Proficient in DevOps tools and practices, including Docker, GitHub Actions, and cloud deployment (AWS, Vercel), enabling smooth CI/CD workflows and efficient production rollouts.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary/20 mb-8"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  {exp.links && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      <a
                        href={exp.links.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Repository
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-muted-foreground">{exp.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part 2: Skills Section with IconCloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto items-center"
        >
          {/* Skills cards - Left side in 2x2 pairs */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4 shadow-lg`}>
                          <skill.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IconCloud - Right side with enhanced design and better centering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative h-[500px] w-[500px] flex items-center justify-center">
              <div className="relative flex size-full items-center justify-center overflow-hidden rounded-3xl border bg-background shadow-lg">
                <IconCloud images={images} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Why Work With Me?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Problem Solver</h4>
                  <p className="text-muted-foreground text-sm">
                    I approach every challenge with analytical thinking and creative solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Team Player</h4>
                  <p className="text-muted-foreground text-sm">
                    Collaborative mindset with excellent communication skills.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Continuous Learner</h4>
                  <p className="text-muted-foreground text-sm">
                    Always staying updated with the latest technologies and best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}