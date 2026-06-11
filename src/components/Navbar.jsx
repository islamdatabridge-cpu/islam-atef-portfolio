import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useLanguage } from '../LanguageContext';

const Navbar = ({ scrolled }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={logo} 
            alt="Islam Atef Logo" 
            style={{ 
              height: window.innerWidth <= 768 ? '60px' : '120px', 
              width: 'auto', 
              borderRadius: '12px' 
            }} 
          />
        </div>
        
        <div className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMobileOpen(false)}>{t.nav.about}</a>
          <a href="#services" className="nav-link" onClick={() => setIsMobileOpen(false)}>{t.nav.services}</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMobileOpen(false)}>{t.nav.skills}</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMobileOpen(false)}>{t.nav.projects}</a>
          <a href="#previous-work" className="nav-link" onClick={() => setIsMobileOpen(false)}>{t.nav.previousWork}</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMobileOpen(false)}>{t.nav.contact}</a>
          <button onClick={toggleLanguage} className="btn btn-outline" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
        </div>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer' }}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
