import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <ProjectContainer>
      <SectionHeader>
        <h2>Some Things I've Built</h2><span></span>
      </SectionHeader>
      <ProjectTile />
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div``;

export default Projects;
