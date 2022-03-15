import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";

const Projects = () => {
  return (
    <ProjectContainer>
      <SectionHeader>
        Projects<span>.</span>
      </SectionHeader>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  min-height: 100vh;
`;

export default Projects;
