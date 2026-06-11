import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            className="glass project-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 className="project-title">{proj.title}</h3>
                {proj.icon}
              </div>
              <p className="project-desc">{proj.desc}</p>
              <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {proj.tech.map((t, i) => (
                  <span key={i} style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem', background: 'rgba(0,255,136,0.1)', color: 'var(--primary-color)', borderRadius: '4px', fontFamily: '"Fira Code", monospace' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default Projects;
