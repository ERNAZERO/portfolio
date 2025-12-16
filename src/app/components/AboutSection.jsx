"use client";

import React, { useState, useTransition } from "react";
import SkillsTabs from "./SkillChart";
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { t } = useLanguage();



  return (
    <section className="text-white scroll-mt-28" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-start py-8 px-4 xl:gap-16 sm:py-32 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-6">{t.about.title}</h2>

          <p className="text-base leading-relaxed text-gray-200 whitespace-pre-line">
            {t.about.description}
          </p>
        </div>

        <div className="w-full mt-10 md:mt-0">
          <SkillsTabs />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;