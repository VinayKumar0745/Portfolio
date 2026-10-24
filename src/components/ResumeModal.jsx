import React, { useEffect, useRef } from 'react';
import { X, FileText, Download, Printer, ExternalLink, Check } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (closeBtnRef.current) closeBtnRef.current.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };

      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumes = [
    {
      id: 'fullstack',
      title: 'Java Full Stack Developer',
      subtitle: 'Spring Boot 3 • React.js • MySQL • REST APIs',
      description: 'Comprehensive resume detailing multi-tier full-stack architecture, relational database modeling, and client-side single-page applications.',
      htmlUrl: '/resumes/Resume_Java_Full_Stack_Developer.html',
      pdfUrl: '/resumes/Resume_Java_Full_Stack_Developer.pdf',
      mdUrl: '/resumes/Resume_Java_Full_Stack_Developer.md',
      isPrimary: true
    },
    {
      id: 'frontend',
      title: 'Frontend Developer | React Developer',
      subtitle: 'React.js (v18) • JavaScript (ES6+) • HTML5 • CSS3',
      description: 'Focused on component hierarchy, client-side state management, form validation, responsive layouts, and accessible UI engineering.',
      htmlUrl: '/resumes/Resume_Frontend_Developer.html',
      pdfUrl: '/resumes/Resume_Frontend_Developer.pdf',
      mdUrl: '/resumes/Resume_Frontend_Developer.md',
      isPrimary: false
    },
    {
      id: 'backend',
      title: 'Java Backend Developer',
      subtitle: 'Java 17 • Spring Boot 3 • Hibernate JPA • MySQL',
      description: 'Emphasizes enterprise REST API engineering, JWT security, Role-Based Access Control, transaction isolation, and Servlets/JSP/JDBC.',
      htmlUrl: '/resumes/Resume_Java_Backend_Developer.html',
      pdfUrl: '/resumes/Resume_Java_Backend_Developer.pdf',
      mdUrl: '/resumes/Resume_Java_Backend_Developer.md',
      isPrimary: false
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div 
        className="modal-dialog" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="resume-modal-title"
        style={{ maxWidth: '680px' }}
      >
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="project-type-tag">ATS-Optimized Resumes</span>
            <h2 id="resume-modal-title" className="modal-title" style={{ fontSize: '1.45rem' }}>
              Download Tailored 1-Page Resume
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
              Select the tailored resume matching your team's role requirements. Each version is calibrated to print cleanly onto <strong>exactly one page</strong>.
            </p>
          </div>
          <button 
            ref={closeBtnRef} 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {resumes.map((res) => (
            <div 
              key={res.id} 
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: res.isPrimary ? '1.5px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>
                      {res.title}
                    </h3>
                    {res.isPrimary && (
                      <span className="tag tag-accent" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                        Recommended
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-accent)', fontWeight: 500, marginTop: '2px' }}>
                    {res.subtitle}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a 
                    href={res.pdfUrl} 
                    download 
                    className="btn btn-primary btn-sm"
                    style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                    title="Download pre-compiled 1-page PDF"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>

                  <a 
                    href={res.htmlUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.82rem', padding: '6px 12px' }}
                    title="Open print-ready 1-page HTML resume with Save to PDF button"
                  >
                    <Printer size={14} />
                    <span>Print / Web</span>
                  </a>

                  <a 
                    href={res.mdUrl} 
                    download 
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.82rem', padding: '6px 10px' }}
                    title="Download clean ATS Markdown resume"
                  >
                    <FileText size={14} />
                    <span>Markdown</span>
                  </a>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {res.description}
              </p>
            </div>
          ))}

          {/* Standard PDF Option */}
          <div 
            style={{
              padding: '12px 18px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px dashed var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '4px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Standard Pre-Compiled PDF
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Direct download of primary compiled resume document (PDF).
              </div>
            </div>

            <a 
              href="/resume.pdf" 
              download="Reddi_Vinay_Kumar_Resume.pdf"
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.82rem', padding: '6px 14px' }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        <div className="modal-footer" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            💡 Tip: In print preview, set Margins to "Minimum" for a flawless 1-page fit.
          </span>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
