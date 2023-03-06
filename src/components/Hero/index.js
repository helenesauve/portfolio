import React from "react";
import "./style.css";


function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <h1>Hey, I'm Hélène</h1>
      <h2>Front-End Web Developer based in Bristol.</h2>
      <div className="button-list">
      <a className="btn" href="https://github.com/helenesauve" target="_blank" rel="noreferrer">Github</a>
      <a className="btn" href="https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-sauv%C3%A9-b572a9117/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="btn" href="https://docs.google.com/document/d/181FQ4xKs4-JjvKeJRMC7BktjksHv1J1I/edit" target="_blank" rel="noreferrer">CV</a>
      </div>
    </div>
    
  );
}

export default Hero;