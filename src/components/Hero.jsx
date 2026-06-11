import React from 'react';
import { Shield, Code2, Terminal } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">
          {t.hero.subtitle}
        </p>
        <div className="hero-buttons delay-200">
          <a href="#projects" className="btn btn-primary">
            <Code2 size={20} /> {t.hero.viewProjects}
          </a>
          <a href="#contact" className="btn btn-outline">
            <Shield size={20} /> {t.hero.hireMe}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
