"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";

const timelineData = [
  {
    icon: <FaBriefcase className="text-[#fe5617]" />,
    title: "Internship",
    description: "Completed a UI/UX internship using Adobe XD.",
    date: "2024",
  },
  {
    icon: <FaCode className="text-[#fe5617]" />,
    title: "Full Stack Learning",
    description: "Currently exploring React, Node.js, Docker, AWS.",
    date: "2025",
  },
  {
    icon: <FaLaptopCode className="text-[#fe5617]" />,
    title: "Portfolio",
    description: "Built my portfolio with React + Vite + Tailwind.",
    date: "2025",
  },
  {
    icon: <FaLaptopCode className="text-[#fe5617]" />,
    title: "Portfolio",
    description: "Built my portfolio with React + Vite + Tailwind.",
    date: "2025",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Journey
        </h2>

        <div className="relative border-l-2 border-[#fe5617] dark:border-orange-400">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-6 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-[#fe5617] dark:border-orange-400">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
                {item.date}
              </time>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
