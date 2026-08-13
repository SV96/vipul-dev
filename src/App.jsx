import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SECTION_FLAGS } from './constants/portfolioConstants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiShowcase from './components/AiShowcase';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-bg-primary theme-text-main selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300">
        <Navbar />
        <main>
          {SECTION_FLAGS.hero && <Hero />}
          {SECTION_FLAGS.about && <About />}
          {SECTION_FLAGS.skills && <Skills />}
          {SECTION_FLAGS.projects && <Projects />}
          {SECTION_FLAGS.aiAssistant && <AiShowcase />}
          {SECTION_FLAGS.experience && <Experience />}
          {SECTION_FLAGS.achievements && <Achievements />}
          {SECTION_FLAGS.education && <Education />}
          {SECTION_FLAGS.contact && <Contact />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
