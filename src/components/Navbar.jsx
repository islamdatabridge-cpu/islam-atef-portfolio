import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logo from '../assets/logo.png';
import { useLanguage } from '../LanguageContext';

const Navbar = ({ scrolled }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={logo} 
            alt="Islam Atef Logo" 
            style={{ 
              height: window.innerWidth <= 768 ? '60px' : '80px', 
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
          <button onClick={toggleLanguage} className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <button onClick={toggleTheme} className="btn btn-outline" style={{ padding: '0.4rem', display: 'flex', alignItems: 'center' }}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
