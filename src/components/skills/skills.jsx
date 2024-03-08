import React from "react";
import "./skills.css";
import html5 from "../../assets/HTML5.svg";
import css3 from "../../assets/CSS3.svg";
import js from "../../assets/Javascript.svg";
import react from "../../assets/react.svg";
import bs from "../../assets/Bootstrap.svg";
import ts from "../../assets/Typescript.svg";
import node from "../../assets/Node.svg";
import mongodb from "../../assets/MongoDB.svg";
import mysql from "../../assets/MySQL.svg";

let logos = [html5, css3, js, react, bs, ts, node, mongodb, mysql];

function skills() {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <div className="skills">
      <div className="title">
        <h1 id="pj">Skills</h1>
      </div>
      <div className="desc">
        <p>
          Listed below are the technologies, programming languages, and
          frameworks with which I have gained substantial experience and
          proficiency through previous projects and work engagements.
        </p>
        <p>
          These tools have been integral to my development journey and have
          contributed to my ability to deliver high-quality solutions
          efficiently.
        </p>
      </div>

      <div className="logos">
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} />
          ))}
        </div>
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default skills;
