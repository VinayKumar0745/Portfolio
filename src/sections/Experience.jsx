import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-canvas)' }} aria-label="Professional Experience">
      <div className="container">
        <SectionHeading 
          tag="Career"
          title="Professional Experience"
          description="Software engineering tenure at Abhishyandh Global Solutions contributing to enterprise web systems."
        />

        <div className="experience-list">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role-title">{exp.role}</h3>
                  <div className="experience-org">{exp.organization} &bull; <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span></div>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>

              <p className="experience-summary">{exp.summary}</p>

              <ul className="experience-bullets">
                {exp.responsibilities.map((bullet, bIdx) => (
                  <li key={bIdx} className="experience-bullet">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
