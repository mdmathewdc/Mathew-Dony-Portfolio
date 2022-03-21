import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { JobTab } from ".";
import { jobData } from "./constants/JobData";

const Resume = () => {
  return (
    <ResumeContainer id="resume-section">
      <SectionHeader>
        <h2>Where I've Worked</h2><span></span>
      </SectionHeader>
      <JobTab data={jobData} />
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  min-height: 95vh;
  padding-top: 10px; // Eg: If 45px, then this will allow you to scroll 15px below your 30px header
  margin-top: -10px;
`;

export default Resume;
