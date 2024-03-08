import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navLinks = [
    { text: "Home", sectionId: "home" },
    { text: "About", sectionId: "about" },
    { text: "Projects", sectionId: "projects" },
    { text: "Skills", sectionId: "skills" },
    { text: "Contact", sectionId: "footer" }
  ];

  function myFunction() {
    var hd = document.getElementsByClassName("header");
    var app = document.getElementsByClassName("App");
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("left");
    if (x.className === "navright" && y.className === "navleft") {
      x.className += " responsive";
      y.className += " responsive";
      hd.style.height = "30vh";
      app.style.height = "250vh";
    } else {
      x.className = "navright";
      y.className = "navleft";
      hd.style.height = "30vh";
      app.style.height = "225vh";
    }
  }

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="header">
      <div className="navleft" id="left">
        <h1>My Portfolio</h1>
      </div>
      <div className="navright" id="myTopnav">
        <div className="navelt icon" onClick={myFunction}>
          <a href="#">
            <FaBars />
          </a>
        </div>
        {navLinks.map((link, index) => (
          <div className="navelt" key={index}>
            <a href="#" onClick={() => scrollToSection(link.sectionId)}>
              {link.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
