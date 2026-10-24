import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar({ onOpenResume }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    if (onOpenResume) {
      onOpenResume();
    }
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="navbar-header" role="banner">
      <div className="container navbar-container">
        <a href="#hero" className="navbar-brand" onClick={closeMobileMenu} aria-label="Vinay Kumar Portfolio Home">
          <span className="brand-bracket">&lt;</span>
          <span>Vinay Kumar</span>
          <span className="brand-bracket">/&gt;</span>
        </a>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu} 
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`navbar-nav ${mobileOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main Navigation">
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
          <a href="#skills" className="nav-link" onClick={closeMobileMenu}>Skills</a>
          <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a>
          <a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a>
          <a href="#education" className="nav-link" onClick={closeMobileMenu}>Education</a>
          <a href="#contributions" className="nav-link" onClick={closeMobileMenu}>Capabilities</a>
          <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>

          <div className="nav-actions">
            <button 
              type="button"
              className="nav-resume-btn"
              onClick={handleResumeClick}
              aria-label="Download tailored 1-page resumes"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
