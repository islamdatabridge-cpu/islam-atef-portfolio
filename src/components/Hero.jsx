import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code2, Terminal } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container hero-content"
      >
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">
          {t.hero.subtitle}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
