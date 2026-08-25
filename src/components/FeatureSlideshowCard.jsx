import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeatureSlideshowCard = ({ title, description, images, icon: Icon, reverse, features, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Pause slideshow if there's only 1 image, or if user is hovering, or if lightbox is open
    if (!images || images.length <= 1 || isHovered || isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images, isHovered, isLightboxOpen]);

  // Handle Esc key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-16 border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors`}>
        <div className="flex-1 w-full relative group">
          
          {/* Slideshow Container */}
          <div 
            className="relative bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none overflow-hidden aspect-[16/9] flex items-center justify-center cursor-pointer group/image transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsLightboxOpen(true)}
          >
            {images && images.map((src, idx) => (
              <img 
                key={idx}
                src={src} 
                alt={t('slideshow.slideOf', { idx: idx + 1, title })} 
                // We use object-cover here to keep the card full, but modal will use object-contain
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform 
                  ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                loading="lazy"
              />
            ))}
            
            {/* Hover overlay with Maximize icon */}
            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full text-white flex flex-col items-center transform transition-transform duration-300 scale-90 group-hover/image:scale-100">
                <Maximize2 className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium">{t('slideshow.expand')}</span>
              </div>
            </div>
            
            {/* Subtle overlay so the images look like a video screen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center border border-blue-100 dark:border-blue-800 transition-colors">
            <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors">
            {title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
            {description}
          </p>
          <ul className="space-y-3 pt-4">
            {(features || [t('showcase.master.feat1'), t('showcase.master.feat2'), t('showcase.master.feat3')]).map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          {children && (
            <div className="pt-6">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full h-full flex flex-col items-center justify-center animate-fade-in-up">
            <img 
              src={images[currentIndex]} 
              alt={t('slideshow.expandedView', { title })} 
              className="w-full h-full max-h-[85vh] object-contain drop-shadow-2xl rounded-xl"
            />
            
            {/* Pagination dots for the modal */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-black/50 backdrop-blur-md rounded-full">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 scale-125' : 'bg-white/40 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureSlideshowCard;
