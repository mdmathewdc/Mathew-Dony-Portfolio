import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { languages } from "./constants/ProgrammingLanguages";
import LanguageTile from "./LanguageTile";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Technologies = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: [0, 1], scale: [null, 1] });
    }
  }, [inView]);

  return (
    <TechnologyContainer ref={ref}>
      <SectionHeader>
        My Tech Stack<span>.</span>
      </SectionHeader>
      <LanguageTilesContainer>
        {languages.map((language) => (
          <LanguageTile name={language} animate={animation} />
        ))}
      </LanguageTilesContainer>
    </TechnologyContainer>
  );
};

const TechnologyContainer = styled.div`
  min-height: max-content;
`;

const LanguageTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  gap: 1rem;
`;

export default Technologies;
