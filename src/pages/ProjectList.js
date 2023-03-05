import React from "react";
import Wrapper from "./components/Wrapper";
import ProjectCard from "./components/ProjectCard";
import projects from "./projects.json";

function ProjectList() {
    return (
        <Wrapper>
      <ProjectCard
        name={projects[0].name}
        // image={friends[0].image}
        description={projects[0].description}
        deployed={projects[0].deployed}
        github={projects[0].github}
      />
      <ProjectCard
        name={projects[1].name}
        // image={friends[0].image}
        description={projects[1].description}
        deployed={projects[1].deployed}
        github={projects[1].github}
      />
      <ProjectCard
        name={projects[2].name}
        // image={friends[0].image}
        description={projects[2].description}
        deployed={projects[2].deployed}
        github={projects[2].github}
      />
      <ProjectCard
        name={projects[3].name}
        // image={friends[0].image}
        description={projects[3].description}
        deployed={projects[3].deployed}
        github={projects[3].github}
      />
      <ProjectCard
        name={projects[4].name}
        // image={friends[0].image}
        description={projects[4].description}
        deployed={projects[4].deployed}
        github={projects[4].github}
      />
      <ProjectCard
        name={projects[5].name}
        // image={friends[0].image}
        description={projects[5].description}
        deployed={projects[5].deployed}
        github={projects[5].github}
      />
    </Wrapper>
  );
}


export default ProjectList;