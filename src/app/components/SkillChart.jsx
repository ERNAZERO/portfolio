// src/app/components/SkillChart.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const TABS = {
  skills: [
    { name: "Python", level: 90 },
    { name: "Java", level: 75 },
    { name: "JavaScript", level: 75 },
    { name: "CSS", level: 75 },
    { name: "HTML", level: 75 },
  ],
  frameworks: [
    { name: "Django", level: 90 },
    { name: "FastAPI", level: 90 },
    { name: "Flask", level: 90 },
    { name: "Spring Boot", level: 75 },
    { name: "Streamlit", level: 75 },
  ],
  languages: {
    en: [
      { name: "German", level: 90 },
      { name: "English", level: 75 },
      { name: "Russian", level: 90 },
      { name: "Kyrgyz", level: 100 },
    ],
    de: [
      { name: "Deutsch", level: 90 },
      { name: "Englisch", level: 75 },
      { name: "Russisch", level: 90 },
      { name: "Kirgisisch", level: 100 },
    ]
  }
};

export default function SkillsTabs() {
  const [active, setActive] = useState("skills");
  const { t, language } = useLanguage();

  const getLevelLabel = (level) => {
    if (level === 100) return t.skills.native;
    if (level >= 90) return t.skills.veryGood;
    return t.skills.good;
  };

  const getCurrentData = () => {
    if (active === 'languages') {
      return TABS.languages[language];
    }
    return TABS[active];
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 px-4">
      <div className="flex gap-4 sm:gap-8 lg:gap-12 mb-6 justify-center sm:justify-start">
        {["skills", "frameworks", "languages"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-base sm:text-lg lg:text-xl font-semibold tracking-wide ${
              active === tab ? "text-white" : "text-gray-400"
            } transition`}
          >
            {active === tab && (
              <motion.div
                layoutId="underline"
                className="h-[2px] sm:h-[3px] bg-blue-400 rounded-full mb-1"
              />
            )}
            {t.skills[tab]}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        {getCurrentData().map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-1 px-1">
              <span className="text-gray-200 font-medium text-sm sm:text-base">{item.name}</span>
              <span className="text-gray-300 text-xs sm:text-sm">{getLevelLabel(item.level)}</span>
            </div>

            <div className="w-full h-4 sm:h-5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.level}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full bg-blue-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}