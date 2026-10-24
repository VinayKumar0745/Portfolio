import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contributions from './sections/Contributions';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

// Styles
import './styles/variables.css';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/projects.css';
import './styles/modal.css';
import './styles/contact.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects onOpenDetails={handleOpenDetails} />
        <Experience />
        <Education />
        <Contributions />
        <Contact />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
}
