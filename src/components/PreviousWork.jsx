import React from 'react';
import { useLanguage } from '../LanguageContext';

// Import images
import imgDoctor from '../assets/portfolio/doctor_app/cover.jpeg';
import imgDataPro from '../assets/portfolio/data_pro_app/cover.jpeg';
import imgVenus from '../assets/portfolio/venus_app/cover.jpg';
import imgKefahy from '../assets/portfolio/kefahy_app/cover.jpg';
import imgKiran from '../assets/portfolio/kiran_app/cover.jpeg';
import imgNomo from '../assets/portfolio/nomo_app/cover.jpeg';
import imgFekra from '../assets/portfolio/fekra_site/cover.jpg';

const PreviousWork = () => {
  const { t } = useLanguage();

  const workItems = [
    { title: t.previousWork.items[0], imgUrl: imgDoctor },
    { title: t.previousWork.items[1], imgUrl: imgDataPro },
    { title: t.previousWork.items[2], imgUrl: imgVenus },
    { title: t.previousWork.items[3], imgUrl: imgKefahy },
    { title: t.previousWork.items[4], imgUrl: imgKiran },
    { title: t.previousWork.items[5], imgUrl: imgNomo },
    { title: t.previousWork.items[6], imgUrl: imgFekra },
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
