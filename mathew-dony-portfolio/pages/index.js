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
      </Head>

      <Hero />
      <Resume />
      <Technologies />
      <Projects />
      <Contact />
      
      <footer>
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 50px;
`;

export default Home;