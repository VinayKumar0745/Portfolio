import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        <div className="footer-links">
          <a href="#hero" onClick={scrollToTop} className="footer-link" aria-label="Scroll back to top">
            Back to top <ArrowUp size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
