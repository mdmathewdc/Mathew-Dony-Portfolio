import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";

const Resume = () => {
  return (
    <ResumeContainer>
      <SectionHeader>
        Resume<span>.</span>
      </SectionHeader>
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  min-height: 100vh;
`;

export default Resume;
