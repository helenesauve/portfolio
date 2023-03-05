import React from "react";
import "./style.css";
// import projects from "./projects.json";

function Project(props) {
    const image = require(`../../images/${props.image}`)
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={image} />
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
            <strong>Deployed link:</strong> {props.deployed}
          </li>
          <li>
            <strong>Github repo:</strong> {props.github}
          </li>
        </ul>
      </div>
      </div>
    
    );
}

export default Project;