import React from 'react';
import Projects from '../projects/projects';
import About from '../about/about'
import Skills from '../skills/skills';
import './portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      {/* Add div s for your projects, skills, experience, etc. */}

      <div className='section' id='about'> {/* Add id to the About section */}
        <About></About>
      </div>

     
      <div className='section prj' id='projects'>
        <Projects></Projects>
      </div >
 
      <div className='section' id='skills'>
        <Skills></Skills>
      </div >

      {/* Add more div s as needed */}
    </div>
  );
};

export default Portfolio;