import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
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

  const folderNamesInOrder = [
    'doctor_app',
    'data_pro_app',
    'venus_app',
    'kefahy_app',
    'kiran_app',
    'nomo_app',
    'fekra_site'
  ];

  const workItems = folderNamesInOrder.map((folder, index) => {
    const images = groupedImages[folder] || [];
    // Try to find the cover image, or default to first image
    let coverImg = images[0]?.src || '';
    const coverMatch = images.find(img => img.src.includes('cover'));
    if (coverMatch) {
      coverImg = coverMatch.src;
    }
    
    return {
      title: t.previousWork.items[index],
      coverImg,
      slides: images
    };
  });

  const openLightbox = (slides) => {
    setCurrentSlides(slides);
    setIsOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {workItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass project-card" 
              style={{ overflow: 'hidden', borderRadius: '12px', cursor: 'pointer' }}
              onClick={() => openLightbox(item.slides)}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.img 
                  src={item.coverImg} 
                  alt={item.title} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  pointerEvents: 'none'
                }}></div>
              </div>
              <div style={{ padding: '1.5rem', position: 'relative', zIndex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--primary-color)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  {item.slides.length} Images
                </p>
              </div>
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
        />
      )}
    </section>
  );
};

export default PreviousWork;
