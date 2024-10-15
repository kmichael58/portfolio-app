import React, { useRef } from "react";
import "./contact.css";
import Cli1 from "../../assets/cli1.png";
import Cli2 from "../../assets/cli2.png";
import Cli3 from "../../assets/cli3.png";
import Instagram from "../../assets/instagram.png";
import Threads from "../../assets/threads.png";
import Linkedin from "../../assets/linkedin.png";
import X from "../../assets/x.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x22q93g', 'template_3yctzvh', form.current, {
        publicKey: 'p_rBrEzdMJGLJumLl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return(
    <section id="contactPage">
      <div className="clients">
      <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          As a beginner front-end developer, I have worked on various sample projects to hone my skills. Here are a few examples of my work:
          </p>
        <div className="clientImgs"> 
           <a href="https://kmichael58.github.io/Passgen.github.io/"><img src={Cli1} alt="Cli1" className="clientImg"/></a>
           <a href="https://kmichael58.github.io/car1.githib.io/"> <img src={Cli2} alt="Cli2" className="clientImg"/></a>
            <a href="https://kmichael58.github.io/vn.github.io/"><img src={Cli3} alt="Cli3" className="clientImg"/></a>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">I am always open to new opportunities, collaborations, and discussions. Whether you have a project in mind, need help with something, or just want to connect, feel free to reach out. You can contact me via email, or connect with me on social media. I will get back to you as soon as possible!</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="" className="name" placeholder="Your Name..." name="from_name"/>
          <input type="email" className="email" placeholder="Your Email..." name="your_email"/>
          <textarea className="msg" name="message" rows="5" placeholder="Your Message..."></textarea>
          <button type="submit"  value="Send" className="submitBtn">Submit</button>
        </form>
        <div className="links">
          <a href="https://www.instagram.com/5.mike.8/"><img src={Instagram} alt="Instagram" className="link"/></a>
          <a href="https://www.threads.net/@5.mike.8"><img src={Threads} alt="Threads" className="link"/></a>
          <a href="https://x.com/MichaelMbu58"><img src={X} alt="X" className="link"/></a>
          <a href="https://www.linkedin.com/in/michael-kamere-a24431329/"><img src={Linkedin} alt="Linkedin" className="link"/></a>
          
        </div>
      </div>
    </section>
  )
}

export default Contact;