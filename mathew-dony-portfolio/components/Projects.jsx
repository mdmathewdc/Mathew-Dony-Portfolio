import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";

const Projects = () => {
  return (
    <ProjectContainer>
      <SectionHeader>
        <h2>Some Things I've Built</h2><span></span>
      </SectionHeader>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  min-height: 100vh;
`;

export default Projects;
