import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function Projects({ onOpenDetails }) {
  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        <SectionHeading 
          tag="Work & Implementation"
          title="Featured Projects"
          description="Real-world corporate assignments and personal applications demonstrating frontend component design, backend API development, and database persistence."
        />

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenDetails={onOpenDetails} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
