import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="glass" style={{ padding: '3rem', marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          {t.about.p1}
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          {t.about.p2}
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          {t.about.p3}
        </p>
      </div>
    </section>
  );
};

export default About;
