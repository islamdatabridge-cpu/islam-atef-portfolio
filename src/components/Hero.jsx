import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import profileImg from '../assets/profile.png'; // Make sure to add this image!

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <span className="hero-greeting">Welcome to my portfolio</span>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-desc">
            {t.hero.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hero-image-wrapper"
        >
          {/* Using a fallback abstract image just in case profile.png is missing */}
          <img 
            src={profileImg} 
            alt="Islam Atef" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
            }} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
