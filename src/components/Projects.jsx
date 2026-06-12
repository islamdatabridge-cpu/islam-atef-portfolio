import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.p1.title,
      desc: t.projects.p1.desc,
      tech: ["Bug Bounty", "Manual Pentesting", "Google VRP"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: t.projects.p2.title,
      desc: t.projects.p2.desc,
      tech: ["Odoo", "Python", "PostgreSQL", "XML"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: t.projects.p3.title,
      desc: t.projects.p3.desc,
      tech: ["React", "Node.js", "Express", "MongoDB", "OAuth2"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: t.projects.p4.title,
      desc: t.projects.p4.desc,
      tech: ["Flutter", "Dart", "Laravel", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      repoLink: "#"
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
        <div className="card-grid">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tech">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={proj.demoLink} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={proj.repoLink} target="_blank" rel="noreferrer">
                    <Github size={18} /> Code
                  </a>
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
