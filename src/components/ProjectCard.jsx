import React from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <article className="project-card" aria-labelledby={`proj-title-${project.id}`}>
      <div className="project-header-meta">
        <span className="project-type-tag">{project.type}</span>
      </div>

      <h3 className="project-title" id={`proj-title-${project.id}`}>
        {project.title}
      </h3>

      <p className="project-short-desc">
        {project.shortDescription}
      </p>

      <div className="project-tech-stack" aria-label="Technologies used">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-pill">{tech}</span>
        ))}
      </div>

      <div className="project-card-actions">
        <button 
          type="button" 
          className="btn btn-secondary btn-sm"
          onClick={() => onOpenDetails(project)}
          aria-label={`View details for ${project.title}`}
        >
          <Info size={15} />
          <span>View Details</span>
        </button>

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-sm"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={15} />
            <span>Repository</span>
          </a>
        )}

        {project.liveDemoUrl && (
          <a 
            href={project.liveDemoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink size={15} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  );
}
