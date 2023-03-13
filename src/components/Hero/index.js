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
      {/* <h2>Front-End Web Developer based in Bristol.</h2> */}
      <Typed className="type-text"
      strings={[ 
            "Front-End Web Developer based in Bristol.",
          ]}
          typeSpeed={70}
        />
      <div className="button-list">
      <a className="btn home-bt" href="https://github.com/helenesauve" target="_blank" rel="noreferrer">Github</a>
      <a className="btn home-bt" href="https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-sauv%C3%A9-b572a9117/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="btn home-bt" href="https://docs.google.com/document/d/181FQ4xKs4-JjvKeJRMC7BktjksHv1J1I/edit?usp=sharing&ouid=104178722517994339552&rtpof=true&sd=true" target="_blank" rel="noreferrer">CV</a>
      {/* <a className="btn home-bt" Document file="helene-sauve-cv.pdf">CV</Document></a> */}
      </div>
    </div>
    
  );
}

export default Hero;