import React from "react";
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Container,
  GitBranch,
  Monitor,
  Settings,
  Lock,
  Layers,
  Network,
} from "lucide-react";

const TechMarquee = () => {
  const technologies = [
    { name: "AWS", icon: <Cloud className="h-6 w-6" /> },
    { name: "Azure", icon: <Cloud className="h-6 w-6" /> },
    { name: "Docker", icon: <Container className="h-6 w-6" /> },
    { name: "Kubernetes", icon: <Settings className="h-6 w-6" /> },
    { name: "Terraform", icon: <Layers className="h-6 w-6" /> },
    { name: "Jenkins", icon: <GitBranch className="h-6 w-6" /> },
    { name: "Ansible", icon: <Server className="h-6 w-6" /> },
    { name: "Prometheus", icon: <Monitor className="h-6 w-6" /> },
    { name: "Grafana", icon: <Database className="h-6 w-6" /> },
    { name: "GitLab CI", icon: <GitBranch className="h-6 w-6" /> },
    { name: "Nginx", icon: <Network className="h-6 w-6" /> },
    { name: "Security", icon: <Shield className="h-6 w-6" /> },
    { name: "CloudWatch", icon: <Monitor className="h-6 w-6" /> },
    { name: "IAM", icon: <Lock className="h-6 w-6" /> },
    { name: "Load Balancing", icon: <Network className="h-6 w-6" /> },
    { name: "Auto Scaling", icon: <Zap className="h-6 w-6" /> },
  ];

  const duplicatedTechs = [...technologies, ...technologies]; // for looping effect

  return (
    <section
      id="about"
      className="py-12 bg-gray-100 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Technologies I Work With
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#fe5617] to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="flex animate-marquee">
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 mx-8 whitespace-nowrap"
              >
                <div className="text-[#fe5617]">{tech.icon}</div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
