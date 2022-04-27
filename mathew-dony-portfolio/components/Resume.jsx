import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { JobTab } from ".";
import { jobData } from "./constants/JobData";
import Fade from "react-reveal/Fade";

const Resume = () => {
  return (
    <Fade bottom duration={1500}>
      <ResumeContainer id="resume-section">
        <SectionHeader>
          <h2>Where I've Worked</h2>
          <span></span>
        </SectionHeader>
        <JobTab data={jobData} />
      </ResumeContainer>
    </Fade>
  );
};

const ResumeContainer = styled.div`
  min-height: 95vh;
  scroll-margin-top: 1rem;
`;

export default Resume;
