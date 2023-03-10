import React from "react";
import "./style.css";

function Project({props}) {
  console.log("in a project")
  console.log(props)

  const image = require(`./${props.image}`)
    return (
      
      <div className="card">
        <div className="img-container">
        <img src={image} alt=""/>
      </div>
        <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Deployed link:</strong> <a href="{props.deployed}">Click here</a>
          </li>
          <li>
            <strong>Github repo:</strong> <a href="{props.github}">Find out more</a>
          </li>
          <img src={props.image} alt="" />
        </ul>
      </div>
      </div>
    
    );
}

export default Project;