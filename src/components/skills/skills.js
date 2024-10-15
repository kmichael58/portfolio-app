import React from "react";
import "./skills.css";
import UIDev from "../../assets/UI.png";
import WebDev from "../../assets/webDev.png";
import AppDev from "../../assets/app.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I have a solid grasp of HTML, CSS, and JavaScript for creating responsive, interactive web pages. I am familiar with Bootstrap for faster UI development and have started learning React. I also use Git for version control and aim to expand my skills into full-stack development.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDev} alt="UIDev" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>UI development</h2>
              <p> Learning to create simple, responsive user interfaces using HTML and CSS.</p>       
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDev} alt="WebDev" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Website development</h2>
              <p>Building basic, functional websites with HTML, CSS, and JavaScript.</p>       
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDev} alt="AppDev" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>App development</h2>
              <p>Exploring mobile-friendly design and basic app creation with React Native and JavaScript.</p>       
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills;