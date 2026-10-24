import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container">
        <SectionHeading 
          tag="Background"
          title="About Me"
          description="My development background, engineering values, and current technical interests."
        />

        <div className="about-grid">
          <div className="about-text-content">
            <p style={{ marginBottom: '16px' }}>
              {profileData.aboutText}
            </p>
            <p>
              I believe in building software that is structured, tested, and aligned with practical business goals. During my development work on enterprise meeting workflows and healthcare web applications, I have focused on delivering clean component structures, reliable form validation, and consistent user experiences.
            </p>
          </div>

          <div className="about-info-cards" aria-label="Key background highlights">
            <div className="info-card">
              <div className="info-card-label">Current Role</div>
              <div className="info-card-value">{profileData.currentRole}</div>
              <div className="info-card-sub">{profileData.currentOrganization}</div>
            </div>

            <div className="info-card">
              <div className="info-card-label">Education</div>
              <div className="info-card-value">{profileData.educationDegree}</div>
              <div className="info-card-sub">
                {profileData.educationInstitution} ({profileData.graduationYear})
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-label">Specialization</div>
              <div className="info-card-value">{profileData.educationSpecialization}</div>
            </div>

            <div className="info-card">
              <div className="info-card-label">Primary Areas of Interest</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {profileData.areasOfInterest.map((area, idx) => (
                  <span key={idx} className="tag tag-accent">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
