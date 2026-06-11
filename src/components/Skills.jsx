import React from 'react';
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

  return (
    <section id="skills" className="container">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-container">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="skill-category-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {cat.icon} {cat.title}
            </h3>
            <div className="skills-grid">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
