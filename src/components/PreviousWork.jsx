import React from 'react';
import { useLanguage } from '../LanguageContext';

const PreviousWork = () => {
  const { t } = useLanguage();

  // Array of placeholder projects
  // In the future, you can put your images in src/assets/portfolio/
  // and import them here, e.g. import proj1 from '../assets/portfolio/project1.png'
  const workItems = [
    { title: t.previousWork.item1, imgUrl: "https://via.placeholder.com/600x400/111111/00ff88?text=Project+1" },
    { title: t.previousWork.item2, imgUrl: "https://via.placeholder.com/600x400/111111/00ff88?text=Project+2" },
    { title: t.previousWork.item3, imgUrl: "https://via.placeholder.com/600x400/111111/00ff88?text=Project+3" },
  ];

  return (
    <section id="previous-work" className="container">
      <h2 className="section-title">{t.previousWork.title}</h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>
        {t.previousWork.desc}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {workItems.map((item, index) => (
          <div key={index} className="glass" style={{ overflow: 'hidden', borderRadius: '12px' }}>
            <img 
              src={item.imgUrl} 
              alt={item.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousWork;
