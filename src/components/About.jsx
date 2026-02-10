import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiGraphql,
  SiRedux,
  SiJsonwebtokens,
  SiRender,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="about"
      className="bg-white dark:bg-gray-900 min-h-screen flex items-center transition-colors duration-300"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Badri Narayanan</span>,
          a passionate MERN stack developer with experience in building
          micro-SaaS projects and delivering 10+ projects for clients. As a
          tutor, I’ve successfully taught frontend development to more than{" "}
          <span className="font-bold text-[#fe5617]">50+ students</span>, and as
          a content creator, I’ve built a community of{" "}
          <span className="font-bold text-[#fe5617]">25k+ followers</span> on
          social media. Currently, I’m a pre-final year B.Tech student in
          Computer Science Engineering.
        </p>

        {/* Skills Section */}
        <div id="skills" className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            {[
              {
                icon: <FaHtml5 size={40} className="text-[#e34c26]" />,
                name: "HTML5",
              },
              {
                icon: <FaCss3Alt size={40} className="text-[#264de4]" />,
                name: "CSS3",
              },
              {
                icon: <FaJsSquare size={40} className="text-[#f7df1e]" />,
                name: "JavaScript",
              },
              {
                icon: (
                  <FaAws size={40} className="text-[#000000] dark:text-white" />
                ),
                name: "AWS",
              },
              {
                icon: <SiTailwindcss size={40} className="text-[#38bdf8]" />,
                name: "Tailwind CSS",
              },
              {
                icon: <FaReact size={40} className="text-[#61dbfb]" />,
                name: "React.js",
              },
              {
                icon: <SiRedux size={40} className="text-[#764abc]" />,
                name: "Redux",
              },
              {
                icon: (
                  <TbBrandFramerMotion
                    size={40}
                    className="text-[#1c1c1c] dark:text-gray-200"
                  />
                ),
                name: "Framer Motion",
              },
              {
                icon: <IoLogoNpm size={40} className="text-[#CB3837]" />,
                name: "NPM",
              },
              {
                icon: <FaNode size={40} className="text-[#68a063]" />,
                name: "Node.js",
              },
              {
                icon: (
                  <SiExpress size={40} className="text-black dark:text-white" />
                ),
                name: "Express.js",
              },
              {
                icon: <SiMongodb size={40} className="text-[#47a248]" />,
                name: "MongoDB",
              },
              {
                icon: (
                  <SiNextdotjs
                    size={40}
                    className="text-black dark:text-white"
                  />
                ),
                name: "Next.js",
              },
              {
                icon: (
                  <SiJsonwebtokens
                    size={40}
                    className="text-[#232F3E] dark:text-white"
                  />
                ),
                name: "JWT",
              },
              {
                icon: (
                  <SiSocketdotio
                    size={40}
                    className="text-black dark:text-white"
                  />
                ),
                name: "Socket.IO",
              },
              {
                icon: <FaGitAlt size={40} className="text-[#f05032]" />,
                name: "Git",
              },
              {
                icon: (
                  <FaGithub size={40} className="text-black dark:text-white" />
                ),
                name: "GitHub",
              },
              {
                icon: <DiVisualstudio size={40} className="text-[#0078d7]" />,
                name: "VS Code",
              },
              {
                icon: <SiPostman size={40} className="text-[#ef5b25]" />,
                name: "Postman",
              },
              {
                icon: <SiGraphql size={40} className="text-[#e535ab]" />,
                name: "GraphQL",
              },
              {
                icon: (
                  <IoLogoVercel
                    size={40}
                    className="text-black dark:text-white"
                  />
                ),
                name: "Vercel",
              },
              {
                icon: <SiNetlify size={40} className="text-[#00d1b2]" />,
                name: "Netlify",
              },
              {
                icon: (
                  <SiRender size={40} className="text-black dark:text-white" />
                ),
                name: "Render",
              },
              {
                icon: <FaFigma size={40} className="text-[#F24E1E]" />,
                name: "Figma",
              },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                {skill.icon}
                <span className="font-bold text-black dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

