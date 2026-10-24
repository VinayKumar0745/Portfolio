import React from 'react';

export default function SectionHeading({ tag, title, description }) {
  return (
    <div className="section-header">
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
