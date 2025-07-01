"use client";

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
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

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Led development of scalable web applications using React, Node.js, and cloud technologies.'
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.'
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Co.',
    period: '2019 - 2020',
    description: 'Built and maintained web applications while learning modern development practices and technologies.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 4 years of experience creating 
            digital solutions that make a difference. I love turning complex problems into 
            simple, beautiful, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Problem Solver</h4>
                  <p className="text-muted-foreground text-sm">
                    I approach every challenge with analytical thinking and creative solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team Player</h4>
                  <p className="text-muted-foreground text-sm">
                    Collaborative mindset with excellent communication skills.
                  </p>
                </div>
                <div>
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