import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="glass" style={{ padding: '3rem', marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          I am a passionate <strong>Full Stack Developer</strong> and <strong>Security Researcher</strong>. 
          Unlike traditional developers, I build software with an offensive security mindset. 
          I don't just write code; I anticipate how it can be broken and secure it from the ground up.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          My unique dual-expertise allows me to architect robust applications—ranging from complex web platforms 
          to mobile and desktop software—while ensuring they are fortified against modern cyber threats.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          When I'm not developing elegant solutions for my clients, I hunt for vulnerabilities in major platforms. 
          I am proud to be recognized by the <strong>Google Vulnerability Reward Program (VRP)</strong> for my contributions to making the web safer.
        </p>
      </div>
    </section>
  );
};

export default About;
