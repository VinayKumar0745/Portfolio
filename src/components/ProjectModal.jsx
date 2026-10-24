import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // Focus the close button when modal opens
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    // Keyboard navigation: Escape key closes modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Body scroll locking
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose} 
      role="presentation"
    >
      <div 
        className="modal-dialog" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-project-title"
      >
        <button 
          ref={closeBtnRef}
          type="button" 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close project details modal"
        >
          <X size={18} />
        </button>

        <div className="modal-header">
          <div className="modal-tag">{project.type}</div>
          <h2 className="modal-title" id="modal-project-title">{project.title}</h2>
          <div className="modal-tech-pills">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>

        {project.technicalNotes && (
          <div className="modal-notice-box">
            <strong>Architecture & Scope:</strong> {project.technicalNotes}
          </div>
        )}

        <div className="modal-section">
          <h3 className="modal-section-title">Problem Addressed</h3>
          <p className="modal-text">{project.problemStatement}</p>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">My Individual Contribution</h3>
          <p className="modal-text">{project.myContribution}</p>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Key Implemented Features</h3>
          <ul className="modal-feature-list">
            {project.features.map((feat, idx) => (
              <li key={idx} className="modal-feature-item">{feat}</li>
            ))}
          </ul>
        </div>

        <div className="modal-actions">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
            >
              <Github size={15} />
              <span>View GitHub Repository</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink size={15} />
              <span>Visit Live Demo</span>
            </a>
          )}

          <button 
            type="button" 
            className="btn btn-secondary btn-sm" 
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
