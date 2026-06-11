import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Activity, Database, ShoppingBag, Target, MonitorSmartphone, TrendingUp, Globe, Eye } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const imagesContext = import.meta.glob('../assets/portfolio/**/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });

const PreviousWork = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState([]);

  // Group images by folder
  const groupedImages = {};
  for (const path in imagesContext) {
    const parts = path.split('/');
    const folderName = parts[parts.length - 2];
    if (!groupedImages[folderName]) {
      groupedImages[folderName] = [];
    }
    groupedImages[folderName].push({ src: imagesContext[path] });
  }

  const folderConfig = [
    { id: 'doctor_app', icon: <Activity size={32} /> },
    { id: 'data_pro_app', icon: <Database size={32} /> },
    { id: 'venus_app', icon: <ShoppingBag size={32} /> },
    { id: 'kefahy_app', icon: <Target size={32} /> },
    { id: 'kiran_app', icon: <MonitorSmartphone size={32} /> },
    { id: 'nomo_app', icon: <TrendingUp size={32} /> },
    { id: 'fekra_site', icon: <Globe size={32} /> }
  ];

  const workItems = folderConfig.map((folder, index) => {
    const images = groupedImages[folder.id] || [];
    return {
      title: t.previousWork.items[index],
      icon: folder.icon,
      slides: images
    };
  });

  const openLightbox = (slides) => {
    if (slides.length > 0) {
      setCurrentSlides(slides);
      setPhotoIndex(0);
      setIsOpen(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="previous-work" className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <h2 className="section-title">{t.previousWork.title}</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>
          {t.previousWork.desc}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {workItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass project-card" 
              style={{ 
                borderRadius: '16px', 
                cursor: 'pointer',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '1px solid rgba(0,255,136,0.1)'
              }}
              onClick={() => openLightbox(item.slides)}
            >
              <div style={{ 
                background: 'rgba(0, 255, 136, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '50%', 
                color: 'var(--primary-color)',
                marginBottom: '1rem',
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)'
              }}>
                {item.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-main)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Eye size={16} /> {item.slides.length} Screens
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={currentSlides}
          index={photoIndex}
          plugins={[Slideshow, Thumbnails]}
          slideshow={{ autoplay: true, delay: 2500 }}
          thumbnails={{ position: 'bottom', width: 120, height: 80, border: 1, borderRadius: 4, padding: 4, gap: 16 }}
        />
      )}
    </section>
  );
};

export default PreviousWork;
