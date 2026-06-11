import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.p1.title,
      desc: t.projects.p1.desc,
      tech: ["Bug Bounty", "Manual Pentesting", "Google VRP"],
      icon: <ShieldCheck size={20} className="text-primary" />
    },
    {
      title: t.projects.p2.title,
      desc: t.projects.p2.desc,
      tech: ["Odoo", "Python", "PostgreSQL", "XML"],
      icon: <ExternalLink size={20} className="text-primary" />
    },
    {
      title: t.projects.p3.title,
      desc: t.projects.p3.desc,
      tech: ["React", "Node.js", "Express", "MongoDB", "OAuth2"],
      icon: <ExternalLink size={20} className="text-primary" />
    },
    {
      title: t.projects.p4.title,
      desc: t.projects.p4.desc,
      tech: ["Flutter", "Dart", "Laravel", "PHP", "MySQL"],
      icon: <ExternalLink size={20} className="text-primary" />
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">{t.projects.title}</h2>
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
