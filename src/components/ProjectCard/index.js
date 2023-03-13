import React from "react";
import "./style.css";



function Project({ props }) {
  console.log(props);

  const image = require(`./${props.image}`);
  return (
    <div className="card h-100">
      <div className="img-container">
        <img src={image} alt="" />
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
            <strong>Deployed link:</strong>{" "}
            <a href={props.deployed}>Click here</a>
          </li>
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            class="btn repo-bt mt-auto"
          >
            Github repository
          </a>
          <img src={props.image} alt="" />
        </ul>
      </div>
    </div>
  );
}

export default Project;
