import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { JobTab } from ".";

const Resume = () => {
  return (
    <ResumeContainer>
      <SectionHeader>
        <h2>Where I've Worked</h2><span></span>
      </SectionHeader>
      <JobTab />
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  min-height: 100vh;
`;

export default Resume;
