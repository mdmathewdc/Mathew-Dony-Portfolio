import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { languages } from "./constants/ProgrammingLanguages";
import LanguageTile from "./LanguageTile";

const Technologies = () => {
  return (
    <TechnologyContainer>
      <SectionHeader>
        Technologies<span>.</span>
      </SectionHeader>
      <LanguageTilesContainer>
        {languages.map((language) => (
          <LanguageTile name={language} />
        ))}
      </LanguageTilesContainer>
    </TechnologyContainer>
  );
};

const TechnologyContainer = styled.div`
  min-height: 100vh;
`;

const LanguageTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  gap: 1rem;
`;

export default Technologies;
