import React from "react";
import "./style.css";
import background from "./glastonbury2.png";
import Typed from "react-typed"
// import { Document} from "react-pdf";
// import PDF from "./helene-sauve-cv.pdf";



function Hero() {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${background})` }}>
      <h1>Hey, I'm Hélène</h1>
     <Typed className="type-text"
      strings={[ 
            "Front-End Web Developer based in Bristol.",
          ]}
          typeSpeed={60}
        /> 
      <div className="button-list">
      <a className="btn home-bt" href="https://github.com/helenesauve" target="_blank" rel="noreferrer">Github</a>
      <a className="btn home-bt" href="https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-sauv%C3%A9-b572a9117/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
    
  );
}

export default Hero;