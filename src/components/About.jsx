import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Server, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              {t.about.p1}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              {t.about.p2}
            </p>
            {t.about.p3 && (
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                {t.about.p3}
              </p>
            )}
            {t.about.stats && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                <div className="stat-card glass" style={{ textAlign: 'center', padding: '1rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', margin: 0 }}>50+</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.about.stats.clients}</p>
                </div>
                <div className="stat-card glass" style={{ textAlign: 'center', padding: '1rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', margin: 0 }}>120+</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.about.stats.projects}</p>
                </div>
                <div className="stat-card glass" style={{ textAlign: 'center', padding: '1rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', margin: 0 }}>300+</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.about.stats.bounties}</p>
                </div>
              </div>
            )}
          </div>
          <div className="about-image">
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
