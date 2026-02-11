"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/Card";
import { Badge } from "./ui/Badge";

const timelineData = [
  {
    icon: <FaBriefcase className="text-white" />,
    title: "UI/UX Developer Internship @ AIIRF",
    description:
      "Completed a UI/UX Developer Internship at AIIRF, Chidambaram. Designed user-friendly interfaces using Figma and collaborated with developers to improve usability.",
    date: "May 2024 – June 2024",
    tag: "internship",
  },
  {
    icon: <FaCode className="text-white" />,
    title: "MERN Stack Intern @ Hitakey Tech Solutions",
    description:
      "Worked as a MERN Stack Intern at Hitakey Tech Solutions, Tiruchirappalli. Built full-stack applications, dockerized services, and automated deployments in an Agile team environment.",
    date: "May 2025 – June 2025",
    tag: "internship",
  },
  {
    icon: <FaGraduationCap className="text-white" />,
    title: "Engineering Degree",
    description:
      "Successfully completed my undergraduate degree at Annamalai University, with a strong focus on cloud computing, DevOps practices, and software engineering fundamentals.",
    date: "2022 – 2026",
    tag: "education",
  },
];

const MyJourney = () => {
  return (
    <section
      id="timeline"
      // ADDED "font-inter" here to match your About component
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-inter"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-600 dark:text-orange-400">
          My Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#fe5617] to-orange-300 dark:from-orange-500 dark:to-orange-900 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer for Desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Center Icon Bubble */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#fe5617] dark:bg-orange-600 border-4 border-white dark:border-gray-900 z-10 shadow-lg transition-transform duration-300 hover:scale-110">
                  <div className="text-lg">{item.icon}</div>
                </div>

                {/* Interactive Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full pl-20 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="group relative overflow-hidden border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#fe5617]/50 dark:hover:border-orange-500/50">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-orange-900/10 pointer-events-none" />

                    <CardHeader className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 hover:bg-orange-200 transition-colors"
                          >
                            {item.date}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-xs text-gray-500 border-gray-200 dark:border-gray-700"
                          >
                            {item.tag}
                          </Badge>
                        </div>
                      </div>

                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#fe5617] dark:group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <CardDescription className=" text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
