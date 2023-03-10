import React from "react";
import "./style.css";
import background from "./glastonbury2.png";


function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${background})` }}>
      <h1>Hey, I'm Hélène</h1>
      <h2>Front-End Web Developer based in Bristol.</h2>
      <div className="button-list">
      <a className="btn home-bt" href="https://github.com/helenesauve" target="_blank" rel="noreferrer">Github</a>
      <a className="btn home-bt" href="https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-sauv%C3%A9-b572a9117/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="btn home-bt" href="https://docs.google.com/document/d/181FQ4xKs4-JjvKeJRMC7BktjksHv1J1I/edit" target="_blank" rel="noreferrer">CV</a>
      </div>
    </div>
    
  );
}

export default Hero;