import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";

const Technologies = () => {
  return (
    <TechnologyContainer>
      <SectionHeader>
        Technologies<span>.</span>
      </SectionHeader>
    </TechnologyContainer>
  );
};

const TechnologyContainer = styled.div`
  min-height: 100vh;
`;

export default Technologies;
