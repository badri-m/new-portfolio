import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import useTheme from "../hooks/usetheme";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter">
        {/* Logo */}
        <div>
          <h1 className="text-[2.5rem] font-bold text-[#000] dark:text-white hover:text-[#fe5617] cursor-pointer">
            badri.
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-all duration-500 ease-in text-[#fe5617]"
          >
            {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-[#F2EFE5] dark:bg-gray-800 p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
        >
          <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
            <Link to="home" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Home
              </li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                About
              </li>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Skills
              </li>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Project
              </li>
            </Link>
            <Link to="timeline" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Timeline
              </li>
            </Link>
          </ul>

          {/* Social + Theme Toggle (Mobile) */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:hidden mt-4 flex-col gap-4 items-center`}
          >
            <div className="flex gap-5">
              <a
                href="https://github.com/AMOHAMMEDIMRAN"
                className="hover:text-[#fe5617]"
              >
                <FaGithub size={29} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammedimrana/"
                className="hover:text-[#fe5617]"
              >
                <FaLinkedin size={29} />
              </a>
              <a
                href="https://www.instagram.com/immucoder/?__pwa=1"
                className="hover:text-[#fe5617]"
              >
                <FaInstagram size={29} />
              </a>
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="mt-2 inline-flex items-center justify-center rounded-full w-10 h-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-yellow-300 shadow hover:opacity-90 transition"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
        </nav>

        {/* Social + Theme Toggle (Desktop) */}
        <div className="hidden lg:flex w-[220px] items-center justify-between gap-3">
          <a
            href="https://github.com/AMOHAMMEDIMRAN"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammedimrana/"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/immucoder/?__pwa=1"
            className="hover:text-[#fe5617]"
          >
            <FaInstagram size={29} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-yellow-300 shadow hover:opacity-90 transition"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
