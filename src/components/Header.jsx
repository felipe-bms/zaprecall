import React from "react";
import styled from "styled-components";

// Estilizando o componente Header
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  margin-bottom: 44px;
  gap: 16px;
  .logo {
    width: 52px;
    height: 60px;
  }
  .header {
    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.7px;
    letter-spacing: -0.012em;
    text-align: center;
    color: white;
  }
`;

// Componente Header que inclui a logo
const Header = () => {
  return (
    <StyledHeader>
      <img className="logo" src="/assets/logo.png" alt="Logo" />{" "}
      <p className="header">ZapRecall</p>
    </StyledHeader>
  );
};

export default Header;
