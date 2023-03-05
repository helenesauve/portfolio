import React from "react";
import "./style.css";

// var myText = "Front-End Web Developer based in Bristol.";
// var myArray = myText.split("");
// var loopTimer;
// function frameLooper() {
//     if(myArray.length > 0) {
//         document.getElementById("type-text").innerHTML += myArray.shift();
//     } else {
//         clearTimeout(loopTimer);
//         return false;
//     }
//     loopTimer = setTimeout(frameLooper(), 70);
// }
// frameLooper()



function Header() {
  return (
    <div className="header">
      <h1>Hey, I'm Hélène</h1>
      <p id="type-text">Front-End Web Developer based in Bristol.</p>
    </div>
  );
}

export default Header
