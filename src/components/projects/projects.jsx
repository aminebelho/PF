import React, { useState, useEffect } from "react";
import "./Projects.css";
import { FaEye } from "react-icons/fa";
import ajout from "../../assets/son/ajout.png";
import bilan from "../../assets/son/bilan.png";
import bon from "../../assets/son/bon.png";
import cnx from "../../assets/son/cnx.png";
import home from "../../assets/son/home.png";
import liste from "../../assets/son/liste.png";
import parametres from "../../assets/son/parametres.png";
import plan from "../../assets/son/plan.png";
import prevision from "../../assets/son/prevision.png";
import tbf from "../../assets/son/tbf.png";
import portfolio from "../../assets/portfolio/portfolio.png";

const projectsData = [
  {
    id: 1,
    time: 7000,
    name: "Portfolio",
    image: [portfolio],
    description: "Welcome to my personal portfolio website, where I showcase my skills, projects, and experience. Feel free to explore and learn more about my work.  If you have any questions or inquiries, don't hesitate to contact me. I'm here to help.",
  },
  {
    id: 2,
    time: 2000,
    name: "Web Application for Training Management",
    image: [
      home,
      cnx,
      ajout,
      liste,
      prevision,
      plan,
      bon,
      tbf,
      bilan,
      parametres,
    ],
    description:
      "This website serves as a comprehensive platform for managing company trainings, covering both front-end and back-end functionalities. It allows users to oversee various aspects of training activities, ensuring efficient organization and tracking of training programs.",
  },
  // Add more project objects as needed
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  var cont = document.getElementsByClassName("content")

  const toggleDetails = (e) => {
    e.preventDefault();
    setShowDetails((prevShowDetails) => !prevShowDetails);
    if (isAutoScrollEnabled) {
      setIsAutoScrollEnabled(false);
    } else {
      setIsAutoScrollEnabled(true);
    }
  };

  useEffect(() => {
    let intervalId;

    if (isAutoScrollEnabled) {
      intervalId = setInterval(() => {
        scrollNext();
      }, 7000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoScrollEnabled]);

  const scrollNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollPrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects">
      <div className="project">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="image-container">
          <img
            src={projectsData[currentProjectIndex].image[0]}
            alt={projectsData[currentProjectIndex].name}
            className="project-image"
          />
          <div className="see-more">
            <button className="btn-see-more" onClick={toggleDetails}>
              <FaEye /> {showDetails ? "See Less" : "See More"}
            </button>
          </div>
        </div>
        {showDetails && (
          <div className="details">
          <h2>{projectsData[currentProjectIndex].name}</h2>
            <p>{projectsData[currentProjectIndex].description}</p>
            <div className="photos-section">
              <h3>Images</h3>
              <div className="photos">
                {projectsData[currentProjectIndex].image.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="photo"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="controls">
          {/* Previous button */}
          <button className="btn-class-name" onClick={scrollPrev}>
            {/* Previous button SVG */}
            <svg
              viewBox="0 0 320 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Previous button SVG path */}
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l192-192c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 256l169.3 169.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-192-192z"></path>
            </svg>
            <span>Previous</span>
          </button>
          {/* Dots */}
          <div className="dots">
            {projectsData.map((_, dotIndex) => (
              <div
                key={dotIndex}
                className={`dot ${
                  dotIndex === currentProjectIndex ? "active" : ""
                }`}
                onClick={() => setCurrentProjectIndex(dotIndex)}
              />
            ))}
          </div>
          {/* Next button */}
          <button className="btn-class-name" onClick={scrollNext}>
            <span>Next</span>
            {/* Next button SVG */}
            <svg
              viewBox="0 0 320 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Next button SVG path */}
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;