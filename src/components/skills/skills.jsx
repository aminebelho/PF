import React from "react";
import "./skills.css";
import Html5 from "../../assets/"

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
        <h1>Skills</h1>
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

          {/* <img src="./src/assets/HTML5.svg" alt="HTML5" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <title>HTML5 Logo Badge</title>
  <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/>
  <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/>
  <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/>
  <path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>
</svg>
          <img src="./src/assets/CSS3.svg" alt="CSS3" />
          <img src="./src/assets/JavaScript.svg" alt="JavaScript" />
          <img src="./src/assets/react.svg" alt="React.js" />
          <img src="./src/assets/Bootstrap.svg" alt="Bootstrap" />
          <img src="./src/assets/Typescript.svg" alt="TypeScript" />
          <img src="./src/assets/Node.js.svg" alt="Node.js" />
          <img src="./src/assets/MongoDB.svg" alt="MongoDB" />
          <img src="./src/assets/MySQL.svg" alt="MySQL" />

        </div>
        <div className="logos-slide">
          <img src="./src/assets/HTML5.svg" alt="HTML5" />
          <img src="./src/assets/CSS3.svg" alt="CSS3" />
          <img src="./src/assets/JavaScript.svg" alt="JavaScript" />
          <img src="./src/assets/react.svg" alt="React.js" />
          <img src="./src/assets/Bootstrap.svg" alt="Bootstrap" />
          <img src="./src/assets/Typescript.svg" alt="TypeScript" />
          <img src="./src/assets/Node.js.svg" alt="Node.js" />
          <img src="./src/assets/MongoDB.svg" alt="MongoDB" />
          <img src="./src/assets/MySQL.svg" alt="MySQL" />
        </div>
      </div>
    </div>
  );
}

export default skills;
