import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
                  "devops.",
                  "Tutor.",
                  "Content Creator.",
                  "Designer.",
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
            A passionate MERN stack developer with 2 years of experience,
            dedicated to building user-friendly web applications. I thrive on
            learning and sharing knowledge as a tutor and content creator.
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

          {/* Button */}
          <div className="bg-[#fe5617] hover:bg-[#e14d15] px-5 py-2 rounded-2xl font-bold text-white dark:bg-white dark:text-black transition-colors duration-300">
            <a href="#">Download CV</a>
          </div>

          <div className="flex place-items-center gap-3 bg-[#fe5617] hover:bg-[#e14d15] px-5 py-2 rounded-2xl font-bold text-white dark:bg-white dark:text-black transition-colors duration-300">
            <a href="#">Down</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[85%] rounded-[50px] shadow-lg"
            src="/profile.webp"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
