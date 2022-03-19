import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";

const Contact = () => {
  return (
    <ContactContainer>
      <SectionHeader>
        <h2>Contact</h2>
        <span></span>
      </SectionHeader>
      <div>
        <p>I'm always open for a chat. You can connect me on:</p>
      </div>
      <LogosContainer>
      <a href="mailto:mathewdony007@gmail.com" target={"_blank"}>
          <img src="/social-logos/mail.svg" className="mail" />
        </a>
        <a href="https://github.com/mdmathewdc" target={"_blank"}>
          <img src="/social-logos/github-original.svg" />
        </a>
        <a href="https://www.linkedin.com/in/mathew-dony" target={"_blank"}>
          <img src="/social-logos/linkedin-plain.svg" />
        </a>
        <a href="https://www.instagram.com/mathew__dony" target={"_blank"}>
          <img src="/social-logos/instagram.svg" className='instagram'/>
        </a>
        <a href="https://www.discordapp.com/users/mdmathewdc#7892" target={"_blank"}>
          <img src="/social-logos/discord.svg" />
        </a>
        
        
      </LogosContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  p {
    font-weight: 300;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  fill: white;
  height: 1.5rem;
  gap: 1rem;
  margin: 2rem 0;

  img {
    height: 1.5rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  }

  .instagram {
    height: 1.8rem;
    margin-top: -0.1rem;
  }

  .mail {
    height: 1.8rem;
    margin-top: -0.1rem;
  }
`;

export default Contact;
