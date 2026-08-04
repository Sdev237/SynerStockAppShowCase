import React, { useState, useEffect } from 'react';
import { Store, ShoppingCart, Server, Code2, Database, ShieldCheck, Shield, CreditCard, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FeatureVideoCard from './components/FeatureVideoCard';
import FeatureSlideshowCard from './components/FeatureSlideshowCard';
import BoutiqueDetailsModal from './components/BoutiqueDetailsModal';

function App() {
  const [isBoutiqueModalOpen, setIsBoutiqueModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navbar */}
  

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
          {t('hero.title1')}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {t('hero.title2')}
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#features" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
            {t('hero.btnDemo')}
          </a>
          <a href="#architecture" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            {t('hero.btnTech')}
          </a>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <div className="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {['React 18', 'Tailwind CSS', 'Vite', 'ASP.NET Core', 'SQL Server', 'Entity Framework'].map((tech) => (
            <span key={tech} className="text-xl font-bold text-gray-400 dark:text-gray-500">{tech}</span>
          ))}
        </div>
      </div>

      {/* Feature Showcases */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('showcase.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          <FeatureSlideshowCard 
            title={t('showcase.master.title')}
            description={t('showcase.master.desc')}
            images={[
              "/demos/master/dashboard.png",
              "/demos/master/clients.png",
              "/demos/master/billing.png",
              "/demos/master/server.png"
            ]}
            features={[
              t('showcase.master.feat1'),
              t('showcase.master.feat2'),
              t('showcase.master.feat3')
            ]}
            icon={Shield}
            reverse={false}
          />

          <FeatureVideoCard 
            title={t('showcase.boutique.title')}
            description={t('showcase.boutique.desc')}
            videoSrc="/demos/demo_boutique.webp"
            icon={ShoppingCart}
            reverse={true}
          >
            <button 
              onClick={() => setIsBoutiqueModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              {t('showcase.boutique.btnMore')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </FeatureVideoCard>

          <FeatureSlideshowCard 
            title={t('showcase.magasin.title')}
            description={t('showcase.magasin.desc')}
            images={[
              "/demos/magasin/dashboard.png",
              "/demos/magasin/overview.png",
              "/demos/magasin/reception.png",
              "/demos/magasin/reports.png"
            ]}
            features={[
              t('showcase.magasin.feat1'),
              t('showcase.magasin.feat2'),
              t('showcase.magasin.feat3')
            ]}
            icon={Store}
            reverse={false}
          />
        </div>
      </section>

      {/* Architecture Highlights */}
      <section id="architecture" className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('architecture.title')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('architecture.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <Server className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('architecture.card1Title')}</h3>
              <p className="text-gray-400">
                {t('architecture.card1Desc')}
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <ShieldCheck className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('architecture.card2Title')}</h3>
              <p className="text-gray-400">
                {t('architecture.card2Desc')}
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <Database className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('architecture.card3Title')}</h3>
              <p className="text-gray-400">
                {t('architecture.card3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 text-center border-t border-gray-800">
        <p className="text-gray-500">{t('footer.text')}</p>
      </footer>

      {/* Modals */}
      <BoutiqueDetailsModal 
        isOpen={isBoutiqueModalOpen} 
        onClose={() => setIsBoutiqueModalOpen(false)} 
      />
    </div>
  );
}

export default App;
