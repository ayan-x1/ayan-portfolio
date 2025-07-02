"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/ayan-x1',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/pathan-ayan',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:pathanayan8347@gmail.com',
      icon: Mail,
    },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <Link href="#home" className="text-2xl font-bold text-primary mb-4 block">
                Ayan
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Full Stack Developer passionate about creating exceptional digital experiences 
                with modern technologies and clean, efficient code.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="sr-only">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Sindhiwad, Lal tower, Rajpipla, Gujarat, 393145</p>
                <p>
                  <a
                    href="mailto:pathanayan8347@gmail.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    pathanayan8347@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+919313917598"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +91 9313917598
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground flex items-center gap-1"
            >
              © {new Date().getFullYear()} Ayan · All rights reserved · Built with {' '}
              <Heart className="w-4 h-4 text-white fill-current" />
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}