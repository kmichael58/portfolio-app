import React from "react";
import "./works.css";
import Proj1 from "../../assets/proj1.png";
import Proj2 from "../../assets/proj2.png";
import Proj3 from "../../assets/proj3.png";
import Proj4 from "../../assets/proj4.png";
import Proj5 from "../../assets/proj5.png";
import Proj6 from "../../assets/proj6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I build simple, responsive websites using HTML, CSS, and JavaScript. I am learning React for dynamic content. I also use Git for version control and focus on mobile-friendly designs and bug fixes to improve my skills.</span>
      <div className="worksImgs">
        <a href="https://kmichael58.github.io/aimike/"><img  src={Proj1} alt="Project 1" className="worksImg"/></a>
        <a href="https://kmichael58.github.io/color.github.io/"><img src={Proj2} alt="Project 2" className="worksImg"/></a>
        <a href="https://kmichael58.github.io/p.github.io/"><img src={Proj3} alt="Project 3" className="worksImg"/></a>
        <a href="https://kmichael58.github.io/QRgen.github.io/"><img src={Proj4} alt="Project 4" className="worksImg"/></a>
        <a href="https://kmichael58.github.io/weatherApp.github.io/"><img src={Proj5} alt="Project 5" className="worksImg"/></a>
        <a href="https://kmichael58.github.io/NotesApp.github.io/"><img src={Proj6} alt="Project 5" className="worksImg"/></a>
        
      </div>
      <a href="https://github.com/kmichael58?tab=repositories"><button className="worksBtn">See More on My Gitub</button></a>
    </section>
  )
}

export default Works;