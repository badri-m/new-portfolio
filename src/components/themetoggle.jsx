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
    <section
      id="timeline"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-[#fe5617]/30 dark:bg-orange-400/30 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                // FIX: Added 'justify-between' to force content to edges
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer (Desktop Only) - Keeps the "empty" side empty */}
                <div className="hidden md:block w-5/12" />

                {/* Icon (Centered) */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-[#fe5617] dark:border-orange-400 z-10 shadow-md">
                  <div className="text-xl">{item.icon}</div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`w-full pl-20 md:pl-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12"
                  }`}
                >
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="inline-block px-3 py-1 my-2 text-xs font-semibold text-[#fe5617] bg-orange-100 dark:bg-orange-900/30 rounded-full">
                      {item.date}
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
