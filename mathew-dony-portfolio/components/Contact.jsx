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
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  min-height: 50vh;
`;

export default Contact;
