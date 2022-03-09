import React, { useRef } from "react";

export default function Header() {
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
        <h1>Hi!</h1>
        <h2>I'm Mathew Dony</h2>

        <p>
          <code>This is the start of an editing session</code>
        </p>
      </main>
    </div>
  );
}
