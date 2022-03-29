import Head from "next/head";
import Image from "next/image";
import { Hero, Resume, Technologies, Projects, Contact } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Mathew Dony</title>
        <meta name="description" content="Portfolio of Mathew Dony" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="https://artwork.jaxsta.com/995/MerebaMusicKU.jpg?d=500x500" />
      </Head>

      <Hero />
      <Resume />
      <Technologies />
      <Projects />
      <Contact />

      <footer>
        <p className="credits">&copy; Designed and built by Mathew Dony</p>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 5vw;
  color: white;

  .credits {
    text-align: center;
    font-size: 0.6rem;
    color: #4f5a61;
  }

  @media (min-width: 768px) {
    padding: 0 15vw;
  }
`;

export default Home;
