import React from "react";
import styled from "styled-components";

const LanguageTile = ({ name }) => {
  return (
    <StyledLanguageTile>
      <img src={`/programming-language-logos/${name}.svg`} alt={name} />
      <span>{name}</span>
    </StyledLanguageTile>
  );
};

const StyledLanguageTile = styled.div`
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
