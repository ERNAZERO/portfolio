// src/app/components/Navbar.jsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    {
      title: t.nav.about,
      path: "#about",
    },
    {
      title: t.nav.projects,
      path: "#projects",
    },
    {
      title: t.nav.contact,
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-xs md:text-3xl text-white font-semibold"
        >
          Home
        </Link>

        {/* Language Switcher - Desktop */}
        <div className="menu hidden md:flex items-center md:w-auto gap-6">
  <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
    {navLinks.map((link, index) => (
      <li key={index}>
        <NavLink href={link.path} title={link.title} />
      </li>
    ))}
  </ul>

  <LanguageSwitcher />
</div>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        
      </div>

      {navbarOpen && (
        <div>
          <MenuOverlay links={navLinks} />
          <div className="flex justify-center py-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;