import React from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.techStack}
          link={project.link?.href}
          isNew={project.isNew}
        />
      ))}
    </div>
  );
}
