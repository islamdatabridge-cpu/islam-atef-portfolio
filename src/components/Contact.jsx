import React from 'react';
import { Mail, User, Link, MessageSquare } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="container">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-container glass" style={{ padding: '3rem 2rem' }}>
        <MessageSquare size={48} className="text-primary" style={{ margin: '0 auto 1.5rem auto' }} />
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{t.contact.subtitle}</h3>
        <p className="contact-text">
          {t.contact.text}
        </p>
        
        <div className="social-links">
          <a href="mailto:islam.data.bridge@gmail.com" className="social-link" title="Email" target="_blank" rel="noreferrer">
            <Mail size={24} />
          </a>
          <a href="https://github.com/islamdatabridge-cpu" className="social-link" title="GitHub" target="_blank" rel="noreferrer">
            <Link size={24} />
          </a>
          <a href="#" className="social-link" title="LinkedIn" target="_blank" rel="noreferrer">
            <User size={24} />
          </a>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <a href="mailto:islam.data.bridge@gmail.com" className="btn btn-primary">
            {t.contact.btn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
