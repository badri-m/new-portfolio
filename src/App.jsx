import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
// UPDATE THE IMPORT PATH BELOW
import { ProjectsSection } from "./components/Projects/ProjectsSection";
import Timeline from "./components/themetoggle";
import TechMarquee from "./components/TechMarquee";

// Your project data
const myProjects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React, Vite, and Tailwind CSS.",
    techStack: ["React", "Tailwind", "Vite"],
    link: { href: "https://github.com/yourname/portfolio", label: "GitHub" },
    isNew: true,
  },
  // Add more projects...
];

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen">
      <Header />
      <main>
        <Home />
       {/*<TechMarquee />*/}
        <About />

        {/* Project Section */}
        <section id="projects" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <ProjectsSection projects={myProjects} />
        </section>

        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;
