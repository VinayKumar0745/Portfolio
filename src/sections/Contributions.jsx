import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { contributionsData } from '../data/contributions';
import { 
  Layout, 
  Box, 
  CheckCircle2, 
  Server, 
  Database, 
  Network, 
  Bug, 
  Users 
} from 'lucide-react';

export default function Contributions() {
  const getIcon = (name) => {
    switch (name) {
      case 'layout': return <Layout size={20} color="var(--text-accent)" />;
      case 'box': return <Box size={20} color="var(--text-accent)" />;
      case 'check-circle': return <CheckCircle2 size={20} color="var(--text-accent)" />;
      case 'server': return <Server size={20} color="var(--text-accent)" />;
      case 'database': return <Database size={20} color="var(--text-accent)" />;
      case 'network': return <Network size={20} color="var(--text-accent)" />;
      case 'bug': return <Bug size={20} color="var(--text-accent)" />;
      default: return <Users size={20} color="var(--text-accent)" />;
    }
  };

  return (
    <section id="contributions" className="section" style={{ backgroundColor: 'var(--bg-canvas)' }} aria-label="What I Can Contribute">
      <div className="container">
        <SectionHeading 
          tag="Practical Value"
          title="What I Can Contribute"
          description="Specific engineering areas where I can contribute immediately to development teams."
        />

        <div className="contributions-grid">
          {contributionsData.map((item, idx) => (
            <div key={idx} className="contribution-card">
              <div style={{ marginBottom: '8px' }}>
                {getIcon(item.icon)}
              </div>
              <h3 className="contribution-title">{item.title}</h3>
              <p className="contribution-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
