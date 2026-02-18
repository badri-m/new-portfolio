const myProjects = [
  {
    title: "Web Portfolio",
    description:
      "Personal portfolio website built with ReactJS and Tailwind CSS, powered by GitHub Actions for CI/CD.",
    techStack: ["ReactJS", "Tailwind CSS", "GitHub Actions"],
    link: { href: "https://github.com/badri-m/new-portfolio", label: "GitHub" },
    isNew: true,
  },
  {
    title: "Terraform S3 Infrastructure",
    description:
      "IaC project that provisions and manages AWS S3 buckets via Terraform.",
    techStack: ["Terraform", "AWS S3", "iac"],
    link: { href: "https://github.com/badri-m/terraform-s3", label: "GitHub" },
    isNew: true,
  },
  {
    title: "Flask App on EKS",
    description:
      "Containerized Flask application deployed to Amazon EKS for scalable cloud-native workloads.",
    techStack: ["Flask", "Docker", "AWS EKS", "Kubernetes"],
    link: { href: "https://github.com/badri-m/flask-eks", label: "GitHub" },
    isNew: true,
  },
  {
    title: "multiple Microservice Architecture",
    description:
      "Dockerized healthcare microservice architecture deployed with Kubernetes.",
    techStack: ["Python", "Docker", "Kubernetes", "Minikube"],
    link: {
      href: "https://github.com/badri-m/medify-microservice",
      label: "GitHub",
    },
  },
  {
    title: "Resilient Web Server",
    description:
      "High-availability web server deployment using Docker and Kubernetes replicas.",
    techStack: ["Docker", "Kubernetes", "minikube"],
    link: {
      href: "https://github.com/badri-m/resilient-webserver",
      label: "GitHub",
    },
  },
  {
    title: "CI/CD for 3-Tier Application",
    description:
      "End-to-end CI/CD pipeline leveraging GitHub, Jenkins, Docker, and AWS EC2.",
    techStack: ["Jenkins", "Docker", "AWS EC2", "GitHub"],
    link: {
      href: "https://github.com/badri-m/CICD_for_3_tier_application",
      label: "GitHub",
    },
  },
  {
    title: "Flask + Jenkins on EC2",
    description:
      "Automated Flask deployment to AWS EC2 instances using Jenkins CI.",
    techStack: ["Flask", "Jenkins", "AWS EC2"],
    link: {
      href: "https://github.com/badri-m/flask-jenkins-ec2",
      label: "GitHub",
    },
  },
  {
    title: "AWS CI/CD Pipeline",
    description:
      "Shell scripts that automate CI/CD workflows across AWS services.",
    techStack: ["docker", "AWS", "CodePipeline", "CodeBuild", "CodeDeploy"],
    link: {
      href: "https://github.com/badri-m/aws-cicd-pipeline",
      label: "GitHub",
    },
  },
  {
    title: "AWS Elastic Beanstalk Docker Deployment",
    description:
      "Dockerized app deployed on Elastic Beanstalk with custom Nginx image stored in S3 and running on EC2.",
    techStack: ["Docker", "Nginx", "AWS S3", "Elastic Beanstalk", "EC2"],
    link: {
      href: "https://github.com/badri-m/aws-beanstalk-project",
      label: "GitHub",
    },
  },
  {
    title: "Secure VPC Setup with EC2",
    description:
      "Manual AWS VPC architecture featuring subnets, route tables, and EC2 deployment.",
    techStack: ["AWS VPC", "EC2", "Networking"],
    link: {
      href: "https://github.com/badri-m/secure-vpc-setup-with-ec2-instance-from-scratch",
      label: "GitHub",
    },
  },
  {
    title: "Final Year MERN Project",
    description:
      "Doctor appointment booking platform with authentication and CRUD built on the MERN stack.",
    techStack: ["MongoDB", "Express.js", "ReactJS", "Node.js"],
    link: {
      href: "https://github.com/badri-m/finalyr_intern_project",
      label: "GitHub",
    },
  },
  {
    title: "Task Manager (React)",
    description: "Intuitive task management UI created with ReactJS.",
    techStack: ["ReactJS", "JavaScript"],
    link: { href: "https://github.com/badri-m/task-manager", label: "GitHub" },
  },
  {
    title: "To-Do App (HTML/CSS/JS)",
    description:
      "Interactive to-do list supporting add, edit, delete, and mark-complete actions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: {
      href: "https://github.com/badri-m/to-do-for-octanet",
      label: "GitHub",
    },
  },
  {
    title: "Landing Page",
    description:
      "Responsive movie recommendation landing page emphasizing clean layout.",
    techStack: ["HTML", "CSS"],
    link: { href: "https://github.com/badri-m/landing-page", label: "GitHub" },
  },
  {
    title: "Password Generator",
    description: "CLI-based secure password generator written in Python.",
    techStack: ["Python"],
    link: {
      href: "https://github.com/badri-m/Password-generator-",
      label: "GitHub",
    },
  },
  {
    title: "Calculator",
    description:
      "Beginner-friendly calculator application implemented in Python.",
    techStack: ["Python"],
    link: { href: "https://github.com/badri-m/Calculator-", label: "GitHub" },
  },
  {
    title: "To-Do List (Python)",
    description: "Command-line task manager built with Python.",
    techStack: ["Python"],
    link: { href: "https://github.com/badri-m/To-do-list", label: "GitHub" },
  },
  {
    title: "Mongo Basic",
    description: "JavaScript-based implementation of MongoDB CRUD operations.",
    techStack: ["MongoDB", "JavaScript"],
    link: { href: "https://github.com/badri-m/mongo-basic", label: "GitHub" },
  },
];

export default myProjects;
