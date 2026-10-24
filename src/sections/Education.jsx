import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <SectionHeading 
          tag="Academic Foundation"
          title="Education"
          description="University background in Computer Science and Engineering with an AI/ML specialization."
        />

        <div className="education-list">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">
                  {edu.degree} in {edu.branch}
                </h3>
                <span className="education-meta">Graduated: {edu.graduationYear}</span>
              </div>

              <div className="education-institution">
                <strong>{edu.institution}</strong> &bull; Specialization: {edu.specialization}
              </div>

              <p className="education-desc">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
