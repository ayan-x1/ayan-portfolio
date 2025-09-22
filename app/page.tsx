import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/hero';
const About = dynamic(() => import('@/components/sections/about'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/contact'), { ssr: false });
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}