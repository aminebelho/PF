import React from 'react';
import Projects from '../projects/projects';
import About from '../about/about';
import Skills from '../skills/skills';
import './portfolio.css';

const Portfolio = () => {
  const sections = [
    { component: <About />, id: 'about' },
    { component: <Projects />, id: 'projects', className: 'prj' },
    { component: <Skills />, id: 'skills' }
    // Add more sections as needed
  ];

  return (
    <div className='portfolio'>
      {sections.map((section, index) => (
        <div key={index} className={`section ${section.className}`} id={section.id}>
          {section.component}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
