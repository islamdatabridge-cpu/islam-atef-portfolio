import React from 'react';
import logo from '../assets/logo.png';
import { useLanguage } from '../LanguageContext';

const Navbar = ({ scrolled }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt="Islam Atef Logo" style={{ height: '80px', width: 'auto', borderRadius: '8px' }} />
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">{t.nav.about}</a>
          <a href="#services" className="nav-link">{t.nav.services}</a>
          <a href="#skills" className="nav-link">{t.nav.skills}</a>
          <a href="#projects" className="nav-link">{t.nav.projects}</a>
          <a href="#previous-work" className="nav-link">{t.nav.previousWork}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>
          <button onClick={toggleLanguage} className="btn btn-outline" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
