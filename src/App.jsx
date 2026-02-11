import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
// UPDATE THE IMPORT PATH BELOW
import { ProjectsSection } from "./components/Projects/ProjectsSection";
import myProjects from "./components/Projects/projectdata";
import MyJourney from "./components/myjourney";
import TechMarquee from "./components/TechMarquee";
import ScrollToTop from "./components/ui/scroll-to-top";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen">
      <Header />
      <main>
        <Home />
        {/*<TechMarquee />*/}
        <About />

        {/* Project Section */}
        <section
          id="projects"
          className="py-12 px-4 md:px-8 max-w-7xl mx-auto font-inter"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#fe5617]">
            My Projects
          </h2>
          <ProjectsSection projects={myProjects} />
        </section>

        <MyJourney />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
