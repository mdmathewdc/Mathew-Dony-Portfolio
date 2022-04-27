import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { languages } from "./constants/ProgrammingLanguages";
import LanguageTile from "./LanguageTile";
import Fade from "react-reveal/Fade";

const Technologies = () => {
  return (
    <Fade bottom duration={1500}>
      <TechnologyContainer>
        <SectionHeader>
          <h2>My Tech Stack</h2>
          <span></span>
        </SectionHeader>
        <LanguageTilesContainer>
          {languages.map((language) => (
            <LanguageTile name={language} />
          ))}
        </LanguageTilesContainer>
      </TechnologyContainer>
    </Fade>
  );
};

const TechnologyContainer = styled.div`
  min-height: max-content;
`;

const LanguageTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  gap: 1rem;
  row-gap: 2rem;

  @media (min-width: 768px) {
    row-gap: 3rem;
  }
`;

export default Technologies;
