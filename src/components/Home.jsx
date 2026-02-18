import Typewriter from "typewriter-effect";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiCredly } from "react-icons/si";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-white dark:bg-gray-900 transition-colors duration-300 py-12"
    >
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            I’m <span className="text-[#fe5617]">Badri Narayanan. M</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold flex gap-2 text-black dark:text-white">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "DevOps Engineer.",
                  "Cloud Engineer.",
                  "Site Reliability Engineer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium">
            A passionate Cloud & DevOps Engineer with hands-on experience in
            AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines. I focus on
            building scalable, automated, and production-ready cloud systems
            with Infrastructure as Code.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold text-black dark:text-gray-200">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Chidambaram</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>6384662481</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>badrinarayananm22@gmail.com</span>
            </div>
          </div>

          {/* Buttons & Socials Container */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
            {/* Download CV Button */}
            <a
              href="public/Badri_Narayanan-resume.pdf"
              download
              className="bg-[#fe5617] hover:bg-[#e14d15] text-white dark:bg-white dark:text-black px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
            >
              Download CV
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/badri-m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[#fe5617] dark:hover:text-[#fe5617] transition-colors duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/badri-narayanan-m-22k18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[#fe5617] dark:hover:text-[#fe5617] transition-colors duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://instagram.com/lonely boy 880"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[#fe5617] dark:hover:text-[#fe5617] transition-colors duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.credly.com/users/badri-narayanan.m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[#fe5617] dark:hover:text-[#fe5617] transition-colors duration-300"
                aria-label="Credly badges"
              >
                <SiCredly size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        {/* UPDATED: justify-center (mobile) -> lg:justify-end (desktop) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
          <img
            className="w-[85%] rounded-[50px] shadow-2xl border-4 border-transparent hover:border-[#fe5617] transition-all duration-500"
            src="/profile.webp"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
