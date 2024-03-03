import React from 'react';
import Projects from '../projects/projects';
import About from '../about/about'
import Skills from '../skills/skills';
import './portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      {/* Add div s for your projects, skills, experience, etc. */}

      <div className='section abtsct'>
        {/* <h2>About</h2> */}
        <About></About>
      </div >
     
      <div className='section prj'>
        <Projects></Projects>
      </div >
 
      <div className='section'>
        <Skills></Skills>
      </div >
{/* 
      <div className='section'>
        <h2>Resume</h2>
      </div > */}

      {/* Add more div s as needed */}
    </div>
  );
};

export default Portfolio;