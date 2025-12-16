"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      hello: "Hello, I'm",
      roles: ["Ernaz", "Student in WHZ", "Software Developer", "Judoka"],
      hireMe: "Hire Me",
      downloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      description: `I am Ernaz Erkinbekov, a Computer Science student with a strong focus on software development and modern AI technologies. My main programming language is Python, and I also work confidently with Java, HTML/CSS, and JavaScript.

      I have solid knowledge of frameworks such as Django, FastAPI, Flask, Spring Boot, and tools for data analysis and machine learning including NumPy, Pandas, SciPy, Scikit-learn, LangChain, and Ollama. 
      
      Additionally, I work with databases like PostgreSQL, MySQL, Redis, and ORMs such as SQLAlchemy and Peewee. I follow clean software development principles (OOP, Scrum) and use Git, GitHub, VS Code and PyCharm as part of my daily workflow.`
    },
    skills: {
      skills: "Skills",
      frameworks: "Frameworks",
      languages: "Languages",
      veryGood: "Very good",
      good: "Good",
      native: "Native"
    },
    achievements: {
      projects: "Projects",
      users: "Users",
      awards: "Awards",
      years: "Years"
    },
    projects: {
      title: "My Projects",
      all: "All",
      web: "Web",
      ai: "AI"
    },
    contact: {
      title: "Let's Connect",
      description: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      yourEmail: "Your email",
      subject: "Subject",
      message: "Message",
      sendMessage: "Send Message",
      emailSent: "Email sent successfully!",
      placeholders: {
        email: "jacob@google.com",
        subject: "Just saying hi",
        message: "Let's talk about..."
      }
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt"
    },
    hero: {
      hello: "Hallo, ich bin",
      roles: ["Ernaz", "Student an der WHZ", "Softwareentwickler", "Judoka"],
      hireMe: "Stellen Sie mich ein",
      downloadCV: "Lebenslauf herunterladen"
    },
    about: {
      title: "Über mich",
      description: `Ich bin Ernaz Erkinbekov, ein Informatikstudent mit starkem Fokus auf Softwareentwicklung und moderne KI-Technologien. Meine Hauptprogrammiersprache ist Python, und ich arbeite auch sicher mit Java, HTML/CSS und JavaScript.
        
        Ich verfüge über fundierte Kenntnisse in Frameworks wie Django, FastAPI, Flask, Spring Boot sowie Tools für Datenanalyse und maschinelles Lernen wie NumPy, Pandas, SciPy, Scikit-learn, LangChain und Ollama.
        
        Zusätzlich arbeite ich mit Datenbanken wie PostgreSQL, MySQL, Redis und ORMs wie SQLAlchemy und Peewee. Ich folge sauberen Softwareentwicklungsprinzipien (OOP, Scrum) und nutze Git, GitHub, VS Code und PyCharm als Teil meines täglichen Workflows.`
    },
    skills: {
      skills: "Fähigkeiten",
      frameworks: "Frameworks",
      languages: "Sprachen",
      veryGood: "Sehr gut",
      good: "Gut",
      native: "Muttersprache"
    },
    projects: {
      title: "Meine Projekte",
      all: "Alle",
      web: "Web",
      ai: "KI"
    },
    contact: {
      title: "Lass uns verbinden",
      description: "Ich suche derzeit nach neuen Möglichkeiten, mein Posteingang ist immer offen. Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten, ich werde mein Bestes tun, um Ihnen zu antworten!",
      yourEmail: "Ihre E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      sendMessage: "Nachricht senden",
      emailSent: "E-Mail erfolgreich gesendet!",
      placeholders: {
        email: "jacob@google.com",
        subject: "Nur um Hallo zu sagen",
        message: "Lass uns reden über..."
      }
    },
    footer: {
      rights: "Alle Rechte vorbehalten."
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'de')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}