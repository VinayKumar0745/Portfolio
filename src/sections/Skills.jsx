import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/skills';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code2 size={18} className="skill-category-icon" />;
      case 'layout': return <Layout size={18} className="skill-category-icon" />;
      case 'server': return <Server size={18} className="skill-category-icon" />;
      case 'database': return <Database size={18} className="skill-category-icon" />;
      default: return <Wrench size={18} className="skill-category-icon" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-canvas)' }} aria-label="Technical Skills">
      <div className="container">
        <SectionHeading 
          tag="Core Competencies"
          title="Technical Skills"
          description="Verified programming languages, frameworks, database systems, and development tools I actively work with."
        />

        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                {getIcon(cat.icon)}
                <h3 className="skill-category-title">{cat.category}</h3>
              </div>
              <div className="skill-tags-wrapper">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
