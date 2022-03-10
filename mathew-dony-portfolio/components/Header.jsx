import React, { useRef } from "react";
import styled from "styled-components";

const Header = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const HeaderWave = () => {
    return (
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_pq6sumqc.json"
          ref={ref}
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
    );
  };

  return (
    <div>
      <HeaderWave />
      <main>
        <StyledHand>
          <h1>Hi!</h1>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_dpohsucu.json"
            ref={ref}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </StyledHand>
        <h2>I'm Mathew Dony</h2>
        <p>
          <code>Software Engineer</code>
        </p>
      </main>
    </div>
  );
};

const StyledHand = styled.div`
 lottie-player {
  width: 100px;
  height: 100px;
 }
`;

export default Header;
