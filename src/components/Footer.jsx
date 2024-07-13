import React from "react";
import styled from "styled-components";

// Estilizando o componente Footer
const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  bottom: 0;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;
  color: rgba(51, 51, 51, 1);
  position: fixed;
  bottom: 0;
  z-index: 2;
`;

// Componente Footer
const Footer = ({ totalCards, finishedCards }) => {
  return (
    <StyledFooter>
      {finishedCards}/{totalCards} CONCLUÍDOS
    </StyledFooter>
  );
};

export default Footer;
