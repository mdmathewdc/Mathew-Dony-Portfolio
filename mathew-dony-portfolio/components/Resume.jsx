import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { JobTab } from ".";
import { jobData } from "./constants/JobData";
import Fade from "react-reveal/Fade";

const Resume = () => {
  return (
<<<<<<< HEAD
    <Fade big duration={1500}>
=======
    <Fade bottom duration={1500} ssrReveal>
>>>>>>> 1c023d46579a7d3c7ae12535016ba6f6cf34c19b
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
