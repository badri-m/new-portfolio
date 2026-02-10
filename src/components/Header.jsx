import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { cn } from "../lib/utils";
import useTheme from "../hooks/usetheme";
import {
  Home,
  User,
  Code,
  Briefcase,
  Clock,
  Menu,
  X,
  Sun,
  Moon,
  FileText,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "timeline", label: "My Journey", icon: Clock },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle Active Section Detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* --- Desktop Navigation (Floating Pill) --- */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-2 py-2 shadow-xl transition-all duration-300">
          {/* Logo / Badge */}
          <div className="flex items-center px-4">
            <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">
              badri<span className="text-[#fe5617]">.</span>
            </span>
          </div>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1" />

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <Link
                  key={section.id}
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-100} // Adjusts scroll position so header doesn't cover title
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "relative cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-md"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white",
                  )}
                >
                  <Icon size={16} />
                  <span>{section.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-1"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-600" />
            )}
          </button>
        </div>
      </nav>

      {/* --- Mobile Navigation Button --- */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition-transform duration-300 active:scale-95"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl z-50 p-6 flex flex-col md:hidden animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                badri<span className="text-[#fe5617]">.</span>
              </h2>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} />
                )}
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;

                return (
                  <Link
                    key={section.id}
                    to={section.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => handleLinkClick(section.id)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium",
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-[#fe5617]"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50",
                    )}
                  >
                    <Icon size={20} />
                    {section.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs text-center text-gray-400">
                Designed by Badri Narayanan
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
