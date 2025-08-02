"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ExpandableProjectCard from '@/components/ui/expandable-project-card';

const projects = [
  {
    id: 1,
    title: "auth-tutorial",
    description: "A full-stack authentication system using the MERN stack. Features user registration, login, JWT authentication, and password reset.",
    longDescription: "This comprehensive authentication system demonstrates modern web security practices using the MERN stack. The application includes user registration with email verification, secure login with JWT tokens, password reset functionality, and role-based access control. The frontend is built with React.js and features a responsive design, while the backend uses Express.js with MongoDB for data persistence. JWT tokens are used for session management, and bcrypt is implemented for password hashing. The system also includes input validation, error handling, and security best practices like rate limiting and CORS configuration.",
    image: "auth.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    githubUrl: "https://github.com/ayan-x1/Auth-Tutorial",
    liveUrl: "https://auth-tutorial-2l78.onrender.com/",
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "2024-06-01"
    },
    category: "Full Stack"
  },
  {
    id: 2,
    title: "blog-buzz",
    description: "A MERN stack blogging platform with user authentication, post creation/editing, and content management.",
    longDescription: "Blog Buzz is a full-featured blogging platform that allows users to create, edit, and manage blog posts. The application features a clean, modern interface with rich text editing capabilities, image uploads, and comment systems. Users can register accounts, create profiles, and manage their content through an intuitive dashboard. The platform includes features like draft saving, post scheduling, categories and tags, search functionality, and social sharing. The backend API is RESTful and includes comprehensive error handling and validation.",
    image: "bb.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubUrl: "https://github.com/ayan-x1/blog-buzz",
    liveUrl: "https://blogs-buzz.vercel.app/",
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "2024-06-01"
    },
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Virtual-Community-Support-Platfrom",
    description: "A virtual community support platform with a modern AngularJS frontend and a robust ASP.NET Core backend. Features include API documentation with Swagger and PostgreSQL for data storage.",
    longDescription: "This virtual community support platform connects users with experts and resources in various domains. The application features a modern AngularJS frontend with responsive design and intuitive user interface. The backend is built with ASP.NET Core, providing robust API endpoints with comprehensive Swagger documentation. The platform includes features like user profiles, community forums, expert matching, resource sharing, and real-time messaging. PostgreSQL is used for data storage, ensuring data integrity and performance. The system also includes authentication, authorization, and comprehensive error handling.",
    image: "vcsp.png",
    technologies: ["AngularJS", "CSS", "HTML", "ASP.NET Core", "Swagger API", "PostgreSQL"],
    githubUrl: "https://github.com/ayan-x1/Virtual-Community-Support-Platfrom",
    liveUrl: null,
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "2024-06-01"
    },
    category: "Full Stack"
  },
  {
    id: 4,
    title: "StockSphere",
    description: "An investment tracking and AI advisory platform built for a hackathon. Features portfolio management, real-time market data, AI-powered investment advice, and comprehensive financial analytics.",
    longDescription: "StockSphere is a comprehensive investment tracking and AI advisory platform developed during a hackathon. The application provides users with a modern dashboard for portfolio management, real-time market data visualization, and AI-powered investment recommendations. Key features include portfolio performance tracking, asset allocation analysis, dividend yield monitoring, and an intelligent AI advisor that provides personalized investment strategies. The platform offers real-time market overview with major indices tracking, tax insights, and educational resources for investors. Built with modern web technologies, StockSphere demonstrates advanced financial data visualization, AI integration, and responsive design principles.",
    image: "ss.png",
    technologies: ["React.js", "Node.js", "TypeScript", "Chart.js", "AI/ML", "Financial APIs"],
    githubUrl: "https://github.com/ayan-x1/StockSphere-NoLimits",
    liveUrl: null,
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "2024-06-01"
    },
    category: "Full Stack"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredFeaturedProjects, setFilteredFeaturedProjects] = useState(projects.filter(p => p.featured));
  const [filteredOtherProjects, setFilteredOtherProjects] = useState(projects.filter(p => !p.featured));

  useEffect(() => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);
    
    if (selectedCategory === "All") {
      setFilteredFeaturedProjects(featuredProjects);
      setFilteredOtherProjects(otherProjects);
    } else {
      setFilteredFeaturedProjects(featuredProjects.filter(project => project.category === selectedCategory));
      setFilteredOtherProjects(otherProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work, featuring full-stack applications, 
            mobile apps, and open-source contributions that demonstrate my 
            technical expertise and problem-solving abilities.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        {filteredFeaturedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Featured Projects
              </h3>
              <p className="text-lg text-muted-foreground">
                My most recent and impactful projects
              </p>
            </div>
            <ExpandableProjectCard 
              projects={filteredFeaturedProjects}
              featured={true}
            />
          </motion.div>
        )}

        {/* Other Projects Section */}
        {filteredOtherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Other Projects
              </h3>
              <p className="text-lg text-muted-foreground">
                Additional projects showcasing various technologies and skills
              </p>
            </div>
            <ExpandableProjectCard 
              projects={filteredOtherProjects}
              featured={false}
            />
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
              <p className="text-muted-foreground mb-6">
                Check out my complete portfolio of projects, contributions, and open-source work.
              </p>
              <Button
                size="lg"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href="https://github.com/ayan-x1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  View GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}