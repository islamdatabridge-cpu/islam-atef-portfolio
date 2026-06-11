import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Google VRP - 2x Vulnerabilities",
      desc: "Successfully discovered, exploited, and reported two critical vulnerabilities within Google's infrastructure, earning recognition in the Google Vulnerability Reward Program.",
      tech: ["Bug Bounty", "Manual Pentesting", "Google VRP"],
      icon: <ShieldCheck size={20} className="text-primary" />
    },
    {
      title: "Enterprise Odoo ERP System",
      desc: "Developed and customized comprehensive Odoo modules for a major enterprise client, integrating secure payment gateways and optimizing database performance.",
      tech: ["Odoo", "Python", "PostgreSQL", "XML"],
      icon: <ExternalLink size={20} className="text-primary" />
    },
    {
      title: "Secure Healthcare React App",
      desc: "Built a HIPAA-compliant web application utilizing React and Node.js. Implemented strict authorization protocols, preventing IDOR and ensuring data integrity.",
      tech: ["React", "Node.js", "Express", "MongoDB", "OAuth2"],
      icon: <ExternalLink size={20} className="text-primary" />
    },
    {
      title: "Cross-Platform E-commerce Mobile App",
      desc: "Developed a Flutter-based e-commerce application with a Laravel backend. Features real-time tracking, secure checkout, and a seamless native-like UI.",
      tech: ["Flutter", "Dart", "Laravel", "PHP", "MySQL"],
      icon: <ExternalLink size={20} className="text-primary" />
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects & Achievements</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass project-card">
            <div className="project-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 className="project-title">{proj.title}</h3>
                {proj.icon}
              </div>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tech">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">#{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
