import React, { useEffect } from "react";
import styled from "styled-components";
import { animate, stagger } from "motion";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    animate(
      ".hi,.name-block,.job-title,.logos-container,.scroll-down",
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
      <section>
        <h1 className="hi">Hi,</h1>
        <h1 className="name-block">
          I'm <span className="my-name">Mathew Dony</span>
        </h1>
        <p className="job-title">Software Engineer</p>
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
        <a href="#">
          <span></span>
        </a>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  font-size: 1rem;

  .scroll-down a span {
    position: absolute;
    top: 15vh;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: scrolldown 2.25s infinite;
    animation: scrolldown 2.25s infinite;
    box-sizing: border-box;
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
