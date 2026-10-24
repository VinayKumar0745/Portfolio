import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-layout">
        <div className="hero-content">
          <h1 className="hero-title">{profileData.heroGreeting}</h1>

          <div className="hero-headline">{profileData.headline}</div>

          <p className="hero-description">{profileData.bioShort}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Projects</span>
              <ArrowDown size={15} />
            </a>

            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={onOpenResume}
              aria-label="Download tailored 1-page resumes"
            >
              <FileText size={15} />
              <span>Download Resume</span>
            </button>

            <a href="#contact" className="btn btn-secondary">
              <span>Get In Touch</span>
            </a>

            <div className="hero-socials" aria-label="Social and code repository links">
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a 
                href={`mailto:${profileData.email}`} 
                className="social-icon-link"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-tech-line" aria-label="Core technologies">
            <span className="tech-line-label">Core Focus:</span>
            {profileData.compactTechLine.map((tech, idx) => (
              <React.Fragment key={idx}>
                <span>{tech}</span>
                {idx < profileData.compactTechLine.length - 1 && (
                  <span className="tech-separator" aria-hidden="true">&middot;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Photo Only */}
        <div className="hero-photo-wrapper" aria-label="Profile photo">
          <div className="hero-photo-frame">
            <img 
              src={profileData.photo} 
              alt={profileData.photoAlt} 
              className="hero-photo-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
