import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWrapper>
      <div class="container">
        <div class="red"></div>
        <div class="magenta"></div>
        <div class="purple"></div>
        <div class="blue"></div>
      </div>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1a1940;
    background-image: linear-gradient(
      111deg,
      #05050b,
      #050410 25%,
      #0c0a24 45%,
      #0e0924 59%,
      #100925 69%,
      #0d061e 77%,
      #0d051e 84%,
      #100623 89%,
      #110524 95%,
      #0c061e
    );
  }
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div > div {
    width: 2vw;
    height: 2vw;
    border-radius: 100%;
    margin: 2vw;
    background-image: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    animation: bounce 2s 0.5s linear infinite;
  }
  .red {
    background-color: #f30818;
  }

  .magenta {
    background-color: #b72587;
    animation-delay: 0.1s;
  }

  .purple {
    background-color: #7b51c7;
    animation-delay: 0.2s;
  }

  .blue {
    background-color: #4795c1;
    animation-delay: 0.3s;
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: scale(1);
      filter: blur(0px);
    }
    25% {
      transform: scale(0.6);
      filter: blur(3px);
    }
    75% {
      filter: blur(3px);
      transform: scale(1.4);
    }
  }
`;

export default Loader;
