import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaAws,
  FaDocker,
  FaLinux,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJenkins,
  SiGithubactions,
  SiTailwindcss,
  SiExpress,
  SiNetlify,
  SiMongodb,
  SiPostman,
  SiOracle,
  SiKubernetes,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
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
          a passionate{" "}
          <span className="font-bold text-[#fe5617]">
            Cloud & DevOps Engineer
          </span>{" "}
          with hands-on experience in designing and automating scalable cloud
          infrastructure. I specialize in{" "}
          <span className="font-bold text-[#fe5617]">
            AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines
          </span>
          , focusing on Infrastructure as Code and reliable production
          deployments. Currently, I’m pursuing my B.E. in{" "}
          <span className="font-bold text-[#fe5617]">
            Computer Science & Engineering
          </span>{" "}
          at Annamalai University, with a strong interest in cloud automation
          and DevOps engineering.
        </p>

        {/* Skills Section */}
        <div id="skills" className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 text-center">
            {[
              // ===== CLOUD & DEVOPS (PRIMARY) =====
              {
                icon: (
                  <FaAws size={40} className="text-black dark:text-white" />
                ),
                name: "AWS",
              },
              {
                icon: <SiOracle size={40} className="text-[#F80000]" />,
                name: "Oracle Cloud",
              },
              {
                icon: <FaDocker size={40} className="text-[#0db7ed]" />,
                name: "Docker",
              },
              {
                icon: <SiKubernetes size={40} className="text-[#326ce5]" />,
                name: "Kubernetes",
              },
              {
                icon: <SiTerraform size={40} className="text-[#844fba]" />,
                name: "Terraform",
              },
              {
                icon: <SiJenkins size={40} className="text-[#d33833]" />,
                name: "Jenkins",
              },
              {
                icon: <SiPrometheus size={40} className="text-[#e6522c]" />,
                name: "Prometheus",
              },
              {
                icon: <SiGrafana size={40} className="text-[#f46800]" />,
                name: "Grafana",
              },

              // ===== CI/CD & AUTOMATION =====
              {
                icon: <FaPython size={40} className="text-[#3776AB]" />,
                name: "Python",
              },
              {
                icon: <SiGithubactions size={40} className="text-[#2088FF]" />,
                name: "GitHub Actions",
              },
              {
                icon: (
                  <FaLinux size={40} className="text-black dark:text-white" />
                ),
                name: "Linux",
              },
              {
                icon: <IoLogoNpm size={40} className="text-[#CB3837]" />,
                name: "NPM",
              },

              // ===== DEPLOYMENT  =====
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

              // ===== BACKEND & DATABASE =====
              {
                icon: (
                  <SiExpress size={40} className="text-black dark:text-white" />
                ),
                name: "Express.js",
              },
              {
                icon: <FaNodeJs size={40} className="text-[#68A063]" />,
                name: "Node.js",
              },
              {
                icon: <SiMongodb size={40} className="text-[#47a248]" />,
                name: "MongoDB",
              },

              // ===== TOOLS =====
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

              // ===== FRONTEND (SECONDARY) =====
              {
                icon: <FaHtml5 size={40} className="text-[#e34c26]" />,
                name: "HTML5",
              },
              {
                icon: <FaCss3Alt size={40} className="text-[#264de4]" />,
                name: "CSS3",
              },
              {
                icon: <SiTailwindcss size={40} className="text-[#38bdf8]" />,
                name: "Tailwind CSS",
              },
              {
                icon: <FaJsSquare size={40} className="text-[#f7df1e]" />,
                name: "JavaScript",
              },
              {
                icon: <FaReact size={40} className="text-[#61dbfb]" />,
                name: "React.js",
              },

              // ===== DESIGN =====
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
