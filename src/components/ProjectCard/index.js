import React from "react";
import "./style.css";

function Project({props}) {
  console.log("in a project")
  console.log(props)

  // var imageLink = require(props.image)
    return (
      <div className="card">
        {/* <div className="img-container">
          <img alt={props.title} src={image} />
        </div> */}
        <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Deployed link:</strong> {props.deployed}
          </li>
          <li>
            <strong>Github repo:</strong> {props.github}
          </li>
          <img src={props.image} alt="" />
        </ul>
      </div>
      </div>
    
    );
}

export default Project;