import React from "react"
import Project from "../Project"
import projectsData from "../../data/projectsData.json"
import berktoycomImage from "../../assets/berktoycom.png"
import easyTeamGeneratorImage from "../../assets/easy-team-generator.png"
import travelersDiaryImage from "../../assets/travelersDiary.png"
import daysAliveImage from "../../assets/daysAlive.png"
import weatherForecastImage from "../../assets/weather-forecast.png"
import moviesearchImage from "../../assets/moviesearch.png"
import nineToFiveImage from "../../assets/9to5.jpeg"
import movieTrackerImage from "../../assets/movie-tracker.png"
import quizAppImage from "../../assets/quizapp.gif"
import movieTrackerAppImage from "../../assets/movieTrackerApp.png"
import passwordGeneratorImage from "../../assets/passwordGenerator.png"
import rockPaperScissorsImage from "../../assets/rps.png"

const imageMap = {
  "berktoy.com": berktoycomImage,
  "easy-team-generator": easyTeamGeneratorImage,
  travelersDiary: travelersDiaryImage,
  DaysAlive: daysAliveImage,
  "weather-forecast": weatherForecastImage,
  moviesearch: moviesearchImage,
  "9to5Planner": nineToFiveImage,
  "movie-tracker": movieTrackerImage,
  quizApp: quizAppImage,
  MovieTrackerApp: movieTrackerAppImage,
  passwordGenerator: passwordGeneratorImage,
  rockPaperScissors: rockPaperScissorsImage,
}

const Projects = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
          image={imageMap[project.title]}
        />
      ))}
    </div>
  )
}

export default Projects
