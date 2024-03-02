import React from "react"
import Project from "../Project"
import projectsData from "../../data/projectsData.json"

const Projects = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
          image={project.image}
        />
      ))}
    </div>
  )
}

export default Projects
