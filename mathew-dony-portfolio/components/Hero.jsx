import React, { useEffect } from "react";
import styled from "styled-components";
import { animate, stagger } from "motion";
import { TypingText } from ".";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    animate(
      ".hi,.name-block,.logos-container,.scroll-down,.TypingText__Wrapper-sc-x6g7br-0",
      {
        opacity: [0, 1],
        transform: ["translateY(7rem)", "translateY(0)"],
      },
      {
        delay: stagger(0.3),
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  }, []);

  const handleScroll = () => {
    const resumeSection = document.querySelector("#resume-section");
    resumeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <HeroContainer>
      <section>
        <h1 className="hi">Hi,</h1>
        <h1 className="name-block">
          I'm <span className="my-name">Mathew Dony</span>
        </h1>
        <TypingText className="job-title" />
        <LogosContainer className="logos-container">
          <a href="https://github.com/mdmathewdc" target={"_blank"}>
            <img src="/social-logos/github-original.svg" />
          </a>
          <a href="https://www.linkedin.com/in/mathew-dony" target={"_blank"}>
            <img src="/social-logos/linkedin-plain.svg" />
          </a>
        </LogosContainer>
      </section>
      <div className="scroll-down">
        {/* Add an Href here to scroll to next section */}
        <a onClick={handleScroll}>
          <span></span>
        </a>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  font-size: 1.3rem;

  .scroll-down a span {
    position: absolute;
    top: 25vh;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 2.5px solid;
    border-bottom: 2.5px solid;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: scrolldown 2.75s infinite;
    animation: scrolldown 2.75s infinite;
    box-sizing: border-box;
    border-image: linear-gradient(140deg, #f8081d 0%, #4795c1 100%);
    border-image-slice: 1;
  }

  @-webkit-keyframes scrolldown {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes scrolldown {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }

  section {
    padding-top: 25vh;
  }

  .name-block {
    font-weight: 500;
  }

  .my-name {
    font-family: "Inter", sans-serif;
    background-image: linear-gradient(
      90deg,
      #ff0000 0%,
      #8b2dca 50%,
      #3c9ec0 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  fill: white;
  height: 1.5rem;
  gap: 1rem;
  margin-top: 3rem;

  img {
    height: 1.5rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export default Hero;
