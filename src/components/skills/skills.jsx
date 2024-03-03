import React from "react";
import "./skills.css";

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
          <img src="./src/assets/HTML5.svg" alt="HTML5" />
          <img src="./src/assets/CSS3.svg" alt="CSS3" />
          <img src="./src/assets/JavaScript.svg" alt="JavaScript" />
          <img src="./src/assets/react.svg" alt="React.js" />
          <img src="./src/assets/Bootstrap.svg" alt="Bootstrap" />
          <img src="./src/assets/Typescript.svg" alt="TypeScript" />
          <img src="./src/assets/Node.js.svg" alt="Node.js" />
          {/* <img src="./src/assets/express-js.png" alt="Express.js" /> */}
          <img src="./src/assets/MongoDB.svg" alt="MongoDB" />
          <img src="./src/assets/MySQL.svg" alt="MySQL" />

          {/* <img src="./src/assets/Axios.svg" alt="Axios" />
          <img src="./src/assets/Java.svg" alt="Java" />
          <img src="./src/assets/C.svg" alt="C" />
          <img src="./src/assets/Oracle.svg" alt="Oracle" />
          <img src="./src/assets/Sql.svg" alt="SQL" /> */}
        </div>
        <div className="logos-slide">
          <img src="./src/assets/HTML5.svg" alt="HTML5" />
          <img src="./src/assets/CSS3.svg" alt="CSS3" />
          <img src="./src/assets/JavaScript.svg" alt="JavaScript" />
          <img src="./src/assets/react.svg" alt="React.js" />
          <img src="./src/assets/Bootstrap.svg" alt="Bootstrap" />
          <img src="./src/assets/Typescript.svg" alt="TypeScript" />
          <img src="./src/assets/Node.js.svg" alt="Node.js" />
          {/* <img src="./src/assets/express-js.png" alt="Express.js" /> */}
          <img src="./src/assets/MongoDB.svg" alt="MongoDB" />
          <img src="./src/assets/MySQL.svg" alt="MySQL" />

          {/* <img src="./src/assets/Axios.svg" alt="Axios" />
          <img src="./src/assets/Java.svg" alt="Java" />
          <img src="./src/assets/C.svg" alt="C" />
          <img src="./src/assets/Oracle.svg" alt="Oracle" />
          <img src="./src/assets/Sql.svg" alt="SQL" /> */}
        </div>
        {/* <div className="tools-slide">
          <img src="./src/assets/HTML5.svg" alt="" />
          <img src="./src/assets/CSS3.png" alt="" />
          <img src="./src/assets/JavaScript.png" alt="" />
          <img src="./src/assets/react.svg" alt="" />
          <img src="./src/assets/HTML5.svg" alt="" />
          <img src="./src/assets/CSS3.png" alt="" />
          <img src="./src/assets/JavaScript.png" alt="" />
          <img src="./src/assets/react.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default skills;
