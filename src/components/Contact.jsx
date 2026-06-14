import React from 'react';
import { Mail, User, Link, MessageSquare, Phone, MessageCircle, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="container">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-container card" style={{ padding: '4rem 2rem', border: '1px solid var(--border-color)' }}>
        <MessageSquare size={48} style={{ margin: '0 auto 1.5rem auto', color: 'var(--primary)' }} />
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{t.contact.subtitle}</h3>
        <p className="contact-text">
          {t.contact.text}
        </p>

        <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
          <Phone size={24} style={{ color: 'var(--primary)' }} /> 
          <span dir="ltr">01100665674</span>
        </div>
        
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="mailto:islam.data.bridge@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
            <Mail size={20} /> {t.contact.btn}
          </a>
          <a href="https://wa.me/201100665674" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderColor: '#25D366', color: '#25D366', padding: '1rem 2rem' }}>
            <MessageCircle size={20} /> {t.contact.whatsapp}
          </a>
          <a href="https://www.linkedin.com/in/islam-atef-a23962415?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderColor: '#0077b5', color: '#0077b5', padding: '1rem 2rem' }}>
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://www.facebook.com/profile.php?id=61590209263834" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderColor: '#1877f2', color: '#1877f2', padding: '1rem 2rem' }}>
            <Facebook size={20} /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
