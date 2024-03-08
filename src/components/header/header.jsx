import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
            <FaBars></FaBars>
          </a>
        </div>
        <div className="navelt nicon">
          <a href="#"  onClick={() => scrollToSection("home")}>Home</a>
        </div>
        <div className='navelt'>
          <a href="#"  onClick={() => scrollToSection("about")}>About</a> 
        </div>
        <div className='navelt'>
          <a href="#"  onClick={() => scrollToSection("projects")}>Projects</a> 
        </div>
        <div className='navelt'>
          <a href="#"  onClick={() => scrollToSection("skills")}>Skills</a> 
        </div>
        <div className="navelt">
          <a href="#" onClick={() => scrollToSection("footer")}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
