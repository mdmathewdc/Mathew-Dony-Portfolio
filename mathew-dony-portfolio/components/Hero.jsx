import React, { useEffect } from "react";
import styled from "styled-components";
import { animate, stagger } from "motion";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    animate(
      ".hi,.name-block,.job-title",
      {
        opacity: [0, 1],
        transform: ["translateY(7rem)", "translateY(0)"],
      },
      {
        delay: stagger(0.2),
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  }, []);

  return (
    <HeroContainer>
      <main>
        <h1 className="hi">Hi,</h1>
        <h1 className="name-block">
          I'm <span className="my-name">Mathew Dony</span>
        </h1>
        <p className="job-title">Software Engineer</p>
      </main>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  font-size: 1rem;

  main {
    padding-top: 25vh;
  }

  .name-block {
    font-weight: 500;
  }

  .my-name {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    background-image: linear-gradient(
      90deg,
      #ff0000 0%,
      #8b2dca 50%,
      #3c9ec0 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .job-title {
    font-weight: 200;
  }
`;

export default Hero;
