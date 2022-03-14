import React, { useRef } from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer>
      <main>
        <h1>Hi!</h1>
        <h2>I'm Mathew Dony</h2>
        <p>
          <code>Software Engineer</code>
        </p>
      </main>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  min-height: 100vh;
  color: #fff;
`;

export default Hero;
