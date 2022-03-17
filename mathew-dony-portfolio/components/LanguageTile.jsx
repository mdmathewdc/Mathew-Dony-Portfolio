import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LanguageTile = ({ name, animate }) => {

  return (
    <StyledLanguageTile
      animate={animate}
      transition={{ type: 'spring', bounce: 0.3, duration: 1.5, ease: "easeInOut" }}
    >
      <img src={`/programming-language-logos/${name}.svg`} alt={name} />
      <span>{name}</span>
    </StyledLanguageTile>
  );
};

const StyledLanguageTile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    font-size: 0.8rem;
    margin-top: 0.3rem;
    font-weight: 200;
    color: #c6c6c6;
    text-align: center;
  }
`;
export default LanguageTile;
