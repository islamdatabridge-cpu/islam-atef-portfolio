import React from 'react';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          &lt;IslamAtef /&gt;
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
