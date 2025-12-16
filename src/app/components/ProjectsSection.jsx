"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { teal } from "tailwindcss/colors";
import { useLanguage } from '../context/LanguageContext';


const projectsData = [
  {
    id: 1,
    title: "UniFlow Hackathon Project",
    description: "A web application for university students to manage their university life effectively.",
    image: "/images/projects/uniflow/Dashboard.png",
    tag: ["All", "Alle", "Web"],
    gitUrl: "https://github.com/sharshekeev13/uniflow-backend-nestjs",

    slides: [
      {
        image: "/images/projects/uniflow/LoginPage.png",
        text: "Login page for user authentication."
      },
      
      {
        image: "/images/projects/uniflow/Dashboard.png",
        text: "Main Dashboard showing overall statistics and recent activities."
      },
      {
        image: "/images/projects/uniflow/AccountPage.png",
        text: "Account settings page for managing user information and preferences."
      },
      {
        image: "/images/projects/uniflow/ImportSchedule.png",
        text: "Import the schedule document to automatically parse all schedule data to the website."
      },
      {
        image: "/images/projects/uniflow/ParcingResult.png",
        text: "Result after Parcing."
      },
      {
        image: "/images/projects/uniflow/MaterialLibrary.png",
        text: "Manage and access your study materials in one place."
      },
      {
        image: "/images/projects/uniflow/TasksTracker.png",
        text: "Check your task completion statistics over time."
      },
      {
        image: "/images/projects/uniflow/FlashCards.png",
        text: "Flashcards feature to aid in memorization and learning."
      },
      {
        image: "/images/projects/uniflow/PomodoroTimer.png",
        text: "Pomodoro timer to help manage work and break intervals."
      },
    ]
  },
  {
    id: 2,
    title: "Text emotions classifier",
    description: "Project to analyze the sentiment of a text with a focus on tweets.",
    image: "/images/projects/emotions/TweetEmotions.png",
    tag: ["All", "Alle", "Web", "AI", "KI"],
    gitUrl: "https://github.com/ERNAZERO/mood-of-detection/tree/main",
    slides: [
      {
        image: "/images/projects/emotions/TweetEmotions.png",
        text: "Main interface of the Text Emotion Classifier web application."       
      },
      {
        image:"/images/projects/emotions/Results.png",
        text: "Results page displaying the detected emotions from the input text."
      }
    ]
  },
    {
    id: 3,
    title: "PaperLess Hackathon Project",
    description: "Document Management System with built-in AI analysis for query answering.",
    image: "/images/projects/paperless/intro.png",
    tag: ["All", "Alle", "Web", "AI", "KI"],
    gitUrl: "https://github.com/ERNAZERO/Pdf-analyser-with-Ollama-and-Langchain",
    slides: [
      {
        image: "images/projects/paperless/pdfAbfrage.png",
        text: "AI-powered query answering based on the content of the uploaded documents."
      },
      {
        image: "images/projects/paperless/Hero.png",
        text: "Main interface of the Document Management System web application."       
      },
      {
        image: "images/projects/paperless/Documents.png",
        text: "Documents page displaying uploaded documents and their details."
      }
    ]
  },
  {
    id: 4,
    title: "Pizza Studium Project",
    description: "A web application for ordering pizza online with various customization options.",
    image: "/images/projects/pizza/intro.png",
    tag: ["All", "Web", "Alle"],
    gitUrl: "https://github.com/ERNAZERO/Pizzeria",
    slides: [
      {
        image: "images/projects/pizza/menu.png",
        text: "Menu page displaying available pizzas and customization options."
      },
      {
        image: "images/projects/pizza/pizzaElem.png",
        text: "Detailed view of a selected pizza with size and topping options."       
      },
      {
        image: "images/projects/pizza/card.png",
        text: "Shopping cart showing selected pizzas and order summary."       
      },
      {
        image: "images/projects/pizza/result.png",
        text: "Order confirmation page showing the final order details and status."       
      },
      {
        image: "images/projects/pizza/profilPanel.png",
        text: "Admin panel for managing user information and order history."
      },
      {
        image: "images/projects/pizza/pizzaListManage.png",
        text: "Admin interface for managing the pizza menu and orders."
      },
      {
        image: "images/projects/pizza/userListManage.png",
        text: "Admin interface for managing the user list and orders."
      }
    ]
  },
  {
    id: 5,
    title: "JudoDojo Project",
    description: "CRM system for managing students, coaches, competitions, schedules and student's rating for a Judo club.",
    image: "/images/projects/judoDojo/intro.png",
    tag: ["All", "Alle", "Web"],
    gitUrl: "https://github.com/ERNAZERO/JudoDojo",
    slides: [
      {
        image: "images/projects/judoDojo/intro.png",
        text: "Dashboard overview of the JudoDojo CRM system."
      },
      {
        image: "images/projects/judoDojo/Students.png",
        text: "Students management page displaying student details and progress."       
      },
      {
        image: "images/projects/judoDojo/training.png",
        text: "Training schedules and attendance tracking for students."
      },
      {
        image: "images/projects/judoDojo/competitions.png",
        text: "Competitions management page for organizing and tracking events."
      },
      {
        image: "images/projects/judoDojo/rankings.png",
      },
      {
        image: "images/projects/judoDojo/rankings2.png",
        text: "rankings page displaying student ratings and performance statistics."

      },
      {
        image: "images/projects/judoDojo/attendance.png"
      },
      {
        image: "images/projects/judoDojo/attendance2.png",
        text: "Attendance tracking page for monitoring student participation in training sessions."
      }

    ]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const { t } = useLanguage();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const openPreview = (project) => {
    setActiveProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setActiveProject(null);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-28">
      <h2 className="text-center text-4xl font-bold text-white mt-52 mb-6 md:mb-6">
          {t.projects.title}
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-0 mb-6">
        <ProjectTag onClick={handleTagChange} name={t.projects.all} isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name={t.projects.web} isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name={t.projects.ai} isSelected={tag === "AI"} />

      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              onPreviewClick={() => openPreview(project)}
            />
          </motion.li>
        ))}
      </ul>

      {isPopupOpen && activeProject && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
        <div className="relative w-11/12 md:w-3/4 lg:w-2/3 bg-[#1f1f1f] p-6 rounded-xl">
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 text-white text-xl"
          >
            ✕
          </button>

          <h3 className="text-white text-2xl mb-4">{activeProject.title}</h3>

          <div className="space-y-10 max-h-[70vh] overflow-y-auto">
            {activeProject.slides.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide.image}
                  className="w-full rounded-lg"
                />
                <p className="text-[#ADB7BE] mt-2 text-center">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
    </section>
  );
};

export default ProjectsSection;
