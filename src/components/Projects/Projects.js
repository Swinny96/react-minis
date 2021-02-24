import React from "react"
import styled from "styled-components"
import Project from "./ProjectCard"
import DesignCode from "../layout/images/logos/logo.svg"

const Projects = ({ siteTitle }) => (
  <ProjectGroup>
    <Project
      title="Open Weather Map"
      text="I created this weather app that allows the user to search location that's fed to an API that fetches the data on the locations weather"
      date="Febuary 2021"
      link="https://openweathermap-cts.netlify.app/"
      id="Weather"
      emoji="☁️"
    />
    <Project
      title="Salad Builder"
      text="I made this Salad Builder that allows the user to build there own salad with the ingredients provided and on their selection, a dynamic list will pop up with the user's ingredients they have picked out"
      date="January 2021"
      link="https://salad-maker.netlify.app/"
      id="Salad"
      emoji="🥗"
    />
    <Project
      title="Food Stall"
      text="This a little React Project that I made that allows the user to add products to a basket which will dynamically tell the user the number of items they've added and the total amount they have put in their cart"
      date="January 2021"
      link="https://foodstallapp.netlify.app/"
      id="FoodStall"
      emoji="🍦"
    />
    <Project
      title="Design + Code 4"
      text="This site was created by myself when following a React Totorial from MengTo the creator of Design + Code."
      date="December 2020"
      link="https://designcode4project.netlify.app/"
      image={DesignCode}
      id="DesignCode"
      id2="DesignCode2"
      alt="Design+Code"
    />
  </ProjectGroup>
)

export default Projects

const ProjectGroup = styled.div`
  display: block;
  justify-items: center;
`
