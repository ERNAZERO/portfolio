"use client";

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-700 hover:opacity-90 transition-opacity"
    >
      <motion.div
        key={language}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2"
      >
        <span className="text-2xl">{language === 'en' ? '🇬🇧' : '🇩🇪'}</span>
        <span className="text-white font-semibold uppercase">{language}</span>
      </motion.div>
    </button>
  );
};

export default LanguageSwitcher;