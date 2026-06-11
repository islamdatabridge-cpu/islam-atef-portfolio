import React from 'react';
import { Mail, User, Link, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Initiate Handshake</h2>
      <div className="contact-container glass" style={{ padding: '3rem 2rem' }}>
        <MessageSquare size={48} className="text-primary" style={{ margin: '0 auto 1.5rem auto' }} />
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Let's build something secure.</h3>
        <p className="contact-text">
          Whether you have a complex software project in mind, need a security audit, 
          or want to discuss bug bounties—my inbox is open.
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
            Send Transmission
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
