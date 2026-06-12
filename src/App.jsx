import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PreviousWork from './components/PreviousWork';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { LanguageProvider } from './LanguageContext';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        <div className="bg-mesh"></div>
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <PreviousWork />
          <Contact />
        </main>
        <footer>
          <div className="container">
            <p>© {new Date().getFullYear()} Eng. Islam Atef. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
