import React from 'react';
import { Globe, Smartphone, Monitor, ShieldAlert, Database, Server } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Globe size={40} />,
      title: t.services.web.title,
      desc: t.services.web.desc
    },
    {
      icon: <Smartphone size={40} />,
      title: t.services.mobile.title,
      desc: t.services.mobile.desc
    },
    {
      icon: <Monitor size={40} />,
      title: t.services.desktop.title,
      desc: t.services.desktop.desc
    },
    {
      icon: <ShieldAlert size={40} />,
      title: t.services.cyber.title,
      desc: t.services.cyber.desc
    },
    {
      icon: <Database size={40} />,
      title: t.services.db.title,
      desc: t.services.db.desc
    },
    {
      icon: <Server size={40} />,
      title: t.services.backend.title,
      desc: t.services.backend.desc
    }
  ];

  return (
    <section id="services" className="container">
      <h2 className="section-title">{t.services.title}</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <div key={index} className="card service-content">
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
