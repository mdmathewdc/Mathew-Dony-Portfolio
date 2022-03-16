import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { languages } from "./constants/ProgrammingLanguages";

const Technologies = () => {

  return (
    <TechnologyContainer>
      <SectionHeader>
        Technologies<span>.</span>
      </SectionHeader>
      <div>
        {languages.map((language) => <p>{language}</p>)}
      </div>
    </TechnologyContainer>
  );
};

const TechnologyContainer = styled.div`
  min-height: 100vh;
`;

export default Technologies;
