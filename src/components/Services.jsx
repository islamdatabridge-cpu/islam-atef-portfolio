import React from 'react';
import { Globe, Smartphone, Monitor, ShieldAlert, Database, Server } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      desc: "Full Stack web applications, custom platforms, WordPress sites, and Odoo integrations. Built for scale and speed."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      desc: "Cross-platform and native mobile apps using Flutter, React Native, Java, Kotlin, and Swift."
    },
    {
      icon: <Monitor size={40} />,
      title: "Desktop Applications",
      desc: "Robust desktop software for Windows, macOS, and Linux using C#, .NET, Python, and Electron."
    },
    {
      icon: <ShieldAlert size={40} />,
      title: "Cybersecurity & Pen-Testing",
      desc: "Vulnerability assessments, penetration testing, and securing infrastructure against OWASP top 10 and advanced threats."
    },
    {
      icon: <Database size={40} />,
      title: "Database Architecture",
      desc: "Designing and optimizing complex database structures in MySQL, PostgreSQL, SQL Server, and MongoDB."
    },
    {
      icon: <Server size={40} />,
      title: "Backend & API Security",
      desc: "Secure API development, authentication mechanisms, and preventing Business Logic and API vulnerabilities."
    }
  ];

  return (
    <section id="services" className="container">
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="glass service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
