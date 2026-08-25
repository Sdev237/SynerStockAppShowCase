import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BoutiqueDetailsModal = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    "/demos/boutique/pos.png",
    "/demos/boutique/dashboard.png",
    "/demos/boutique/catalog.png",
    "/demos/boutique/history.png",
    "/demos/boutique/availability.png"
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 sm:p-8 animate-fade-in">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-[110]"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-[95vw] max-w-[1400px] aspect-[16/9] group">
        
        {/* Conteneur principal de la modale */}
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((src, idx) => (
            <img 
              key={idx}
              src={src} 
              alt={t('slideshow.slideOf', { idx: idx + 1, title: t('showcase.boutique.title') })}
              className={`absolute inset-0 w-full h-full object-contain rounded-2xl transition-opacity duration-500 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />
          ))}

          {/* Boutons de navigation gauche/droite */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Points de pagination en bas */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 scale-125' : 'bg-white/40 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoutiqueDetailsModal;
