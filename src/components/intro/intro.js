import React, { useState } from "react";
import "./intro.css";
import bg from "../../assets/webD.png";
import {Link} from 'react-scroll';
import btnImg from "../../assets/hireme.png"

const Intro = () => {
  return (
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I am <span className="introName">Michael</span><br/>Web developer</span>
            <p className="introPara">I am a junior frontend developer skilled in HTML, CSS, JavaScript, and React.<span><br/> I’m eager to learn and grow, and this portfolio showcases my<span><br/> early work as I start my web development journey.</span></span></p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Web Dev" className="bg"/>
      </section>
  )
}

export default Intro;