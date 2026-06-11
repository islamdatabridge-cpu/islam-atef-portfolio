import React from 'react';
import { Shield, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content animate-fade-in">
        <span className="hero-greeting">root@islam-atef:~$ whoami</span>
        <h1 className="hero-title">Eng. Islam Atef</h1>
        <p className="hero-subtitle">
          Full Stack Developer • Security Researcher • Bug Bounty Hunter
        </p>
        <div className="hero-buttons delay-200">
          <a href="#projects" className="btn btn-primary">
            <Code2 size={20} /> View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            <Shield size={20} /> Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
