import React from "react";
import "./style.css";


function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <h1>Hey, I'm Hélène</h1>
      <h2>Front-End Web Developer based in Bristol.</h2>
    </div>
    
  );
}

export default Hero;