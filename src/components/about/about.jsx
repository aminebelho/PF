import React, { Component } from "react";
import './about.css'
import pdp from "../../assets/pdp.png"

export default class about extends Component {
  render() {
    return (
        <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src={pdp} alt="about image" />
                </div>
              </div>
              <h2>BELHOCINE Amine</h2>
              <h3>Web developer</h3>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="hello">
          <h1>Hello<span>!</span></h1>
          <h2>Here's who I am & what I do</h2>
            </div>
          <div className="about-para">
          <p>
            As a software engineer and full-stack web developer, I specialize in
            transforming your ideas and requirements into visually stunning and
            functional designs. My passion lies in crafting websites that not
            only meet your needs but also captivate your audience.
          </p>
          <p>
            I thrive on adding my personal touch to each project, ensuring that
            your website is not only unique but also a true reflection of your
            identity. I prioritize user-friendliness and creativity, striving to
            make every interaction with your site memorable.
          </p>
          <p>
            Every day, I aim to expand my knowledge and skills, pushing the
            boundaries of what's possible. With each project, I see endless
            opportunities for growth and innovation. Let's collaborate and bring
            your vision to life!
          </p> 
          </div>
        </div>
      </div>
    );
  }
}

