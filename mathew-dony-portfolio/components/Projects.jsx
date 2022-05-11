import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import ProjectTile from "./ProjectTile";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
<<<<<<< HEAD
    <Fade big duration={1500}>
=======
    <Fade bottom duration={1500} ssrReveal>
>>>>>>> 1c023d46579a7d3c7ae12535016ba6f6cf34c19b
      <ProjectContainer>
        <SectionHeader>
          <h2>Some Things I've Built</h2>
          <span></span>
        </SectionHeader>
        <ProjectTile />
      </ProjectContainer>
    </Fade>
  );
};

const ProjectContainer = styled.div``;

export default Projects;
