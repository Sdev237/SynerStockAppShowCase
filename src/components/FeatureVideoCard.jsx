import React from 'react';
import { useTranslation } from 'react-i18next';

const FeatureVideoCard = ({ title, description, videoSrc, icon: Icon, reverse, features, children }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-16 border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors`}>
      <div className="flex-1 w-full relative group">
        <div className="relative bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none overflow-hidden aspect-[4/3] flex items-center justify-center transition-colors">
          <img 
            src={videoSrc} 
            alt={`Démo de ${title}`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EVid%C3%A9o %C3%A0 venir...%3C/text%3E%3C/svg%3E";
            }}
          />
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
          {(features || [t('showcase.boutique.feat1'), t('showcase.boutique.feat2'), t('showcase.boutique.feat3')]).map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        {children && (
          <div className="pt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureVideoCard;
