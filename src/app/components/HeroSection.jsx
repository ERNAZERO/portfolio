"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="lg:py-44">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">
              {t.hero.hello}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                t.hero.roles[0],
                1000,
                t.hero.roles[1],
                1000,
                t.hero.roles[2],
                1000,
                t.hero.roles[3],
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-slate-200 text-white"
            >
              {t.hero.hireMe}
            </Link>
            
            <a
              href="/cv/Ernaz_Erkinbekov_CV.pdf"
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t.hero.downloadCV}
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-white w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/portfolio_photo.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;