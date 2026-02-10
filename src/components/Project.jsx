// Import React hooks and external libraries
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Main Projects component
const Projects = () => {
  // State for managing active filter
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter options for project categories
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "aws", label: "AWS" },
    { id: "devops", label: "DevOps" },
    { id: "automation", label: "Automation" },
    { id: "monitoring", label: "Monitoring" },
  ];

  // Project data array - removed image URLs
  const projects = [
    {
      id: 1,
      title: "Serverless E-commerce Platform",
      description:
        "Scalable serverless e-commerce solution built with AWS Lambda, API Gateway, and DynamoDB. Implemented auto-scaling, cost optimization, and real-time inventory management.",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront"],
      categories: ["aws", "serverless"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      title: "Kubernetes CI/CD Pipeline",
      description:
        "Automated CI/CD pipeline for microservices deployment on Kubernetes. Features blue-green deployments, automated testing, and rollback capabilities.",
      tags: ["Kubernetes", "Jenkins", "Docker", "Helm", "ArgoCD"],
      categories: ["devops", "kubernetes"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      title: "Multi-Region Infrastructure as Code",
      description:
        "Comprehensive IaC solution managing multiple environments with Terraform. Includes state management, module reusability, and compliance automation.",
      tags: ["Terraform", "AWS", "Ansible", "GitLab CI", "Vault"],
      categories: ["automation", "terraform"],
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 4,
      title: "Observability Stack",
      description:
        "Complete observability solution with metrics, logs, and traces. Features custom dashboards, alerting, and automated incident response workflows.",
      tags: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "PagerDuty"],
      categories: ["monitoring", "observability"],
      gradient: "from-red-500 to-pink-600",
    },
    {
      id: 5,
      title: "Security Compliance Automation",
      description:
        "Automated security compliance framework with real-time monitoring, vulnerability assessment, and automated remediation for cloud infrastructure.",
      tags: ["AWS Config", "GuardDuty", "Security Hub", "Lambda", "CloudTrail"],
      categories: ["aws", "security"],
      gradient: "from-red-500 to-orange-600",
    },
    {
      id: 6,
      title: "AWS Cost Optimization Engine",
      description:
        "Intelligent cost optimization platform that automatically identifies savings opportunities, right-sizes resources, and provides actionable recommendations.",
      tags: ["Cost Explorer API", "CloudWatch", "Python", "Boto3", "SNS"],
      categories: ["aws", "automation"],
      gradient: "from-green-500 to-teal-600",
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of cloud infrastructure and DevOps solutions that
            demonstrate scalability, automation, and innovation.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-white/20 overflow-hidden hover:scale-105 transition-all duration-300"
            >
              {/* Project content without image */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.categories.slice(0, 2).map((category) => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-medium"
                      >
                        {category.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Live Demo
                  </button>
                  <button className="flex-1 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                    <Github className="w-4 h-4 inline mr-2" />
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the Projects component as default
export default Projects;
