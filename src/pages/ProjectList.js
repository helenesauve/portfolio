import React from "react";
import Wrapper from "../components/Wrapper";
import ProjectCard from "../components/ProjectCard";
import projectData from "../projects.json";

// class ProjectList extends Component {
//   state = {
//     projects
//   }
// }

function ProjectList() {
console.log(projectData)

    return (
        <Wrapper>
          {projectData.map(project => <ProjectCard props={project}/>)}    
    </Wrapper>
  );
}


export default ProjectList;