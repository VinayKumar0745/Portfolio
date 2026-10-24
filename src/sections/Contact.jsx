import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact Section">
      <div className="container">
        <SectionHeading 
          tag="Get In Touch"
          title="Let's Connect"
          description="I'm interested in opportunities to contribute to meaningful software projects, collaborate with development teams, and continue growing as a software developer."
        />

        <div className="contact-layout">
          <div className="contact-info-panel">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Whether you have an opening for a <strong>Frontend Developer</strong>, <strong>Java Developer</strong>, or <strong>Java Full Stack Developer</strong> role, feel free to reach out. I respond promptly to phone calls, emails, and LinkedIn messages.
            </p>

            <div className="contact-links-list">
              <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="contact-link-card">
                <div className="contact-icon-box">
                  <Phone size={18} />
                </div>
                <div className="contact-link-texts">
                  <span className="contact-link-label">Phone / WhatsApp</span>
                  <span className="contact-link-value">{profileData.phone}</span>
                </div>
              </a>

              <a href={`mailto:${profileData.email}`} className="contact-link-card">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div className="contact-link-texts">
                  <span className="contact-link-label">Direct Email</span>
                  <span className="contact-link-value">{profileData.email}</span>
                </div>
              </a>

              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link-card"
              >
                <div className="contact-icon-box">
                  <Linkedin size={18} />
                </div>
                <div className="contact-link-texts">
                  <span className="contact-link-label">LinkedIn Profile</span>
                  <span className="contact-link-value">linkedin.com/in/vinay-kumar-reddi</span>
                </div>
                <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>

              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link-card"
              >
                <div className="contact-icon-box">
                  <Github size={18} />
                </div>
                <div className="contact-link-texts">
                  <span className="contact-link-label">GitHub Repository</span>
                  <span className="contact-link-value">github.com/VinayKumar0745</span>
                </div>
                <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
