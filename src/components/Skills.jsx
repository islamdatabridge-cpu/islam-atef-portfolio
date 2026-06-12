import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Bug, Lock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories[0],
      icon: <Code size={24} className="text-primary" />,
      skills: ["PHP", "Laravel", "Node.js", "Python", "Django", "ASP.NET", "C#"]
    },
    {
      title: t.skills.categories[1],
      icon: <Terminal size={24} className="text-primary" />,
      skills: ["React", "Vue", "Angular", "Flutter", "React Native", "Kotlin", "Swift", "Vanilla JS"]
    },
    {
      title: t.skills.categories[2],
      icon: <Database size={24} className="text-primary" />,
      skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "WordPress", "Odoo", "WooCommerce"]
    },
    {
      title: t.skills.categories[3],
      icon: <Bug size={24} className="text-primary" />,
      skills: ["XSS", "SQLi", "IDOR", "SSRF", "CSRF", "Auth Bypass", "Business Logic", "API Sec"]
    },
    {
      title: t.skills.categories[4],
      icon: <Lock size={24} className="text-primary" />,
      skills: ["Burp Suite", "Nuclei", "FFUF", "Nmap", "Metasploit", "Wireshark", "Kali Linux"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <h2 className="section-title">{t.skills.title}</h2>
        <div>
          {skillCategories.map((cat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="skills-category">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'var(--primary-glow)', borderRadius: '12px', color: 'var(--primary)', display: 'flex' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>{cat.title}</h3>
              </div>
              <div className="skills-flex">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
