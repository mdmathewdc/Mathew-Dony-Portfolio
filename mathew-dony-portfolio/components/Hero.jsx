import React, { useEffect } from "react";
import styled from "styled-components";
import { animate, stagger } from "motion";

const Hero = () => {
  useEffect(() => {
    animate(".click", { transform: "scale(0.5)" }, { duration: 3.5 });
  });
  return (
    <HeroContainer>
      <main>
        <h1 className="click">Hi!</h1>
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
