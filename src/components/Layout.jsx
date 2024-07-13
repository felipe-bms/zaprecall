import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CardDisplayer from "./CardDisplayer";
import CARDS from "../data/CARDS";

// Definindo o componente Layout estilizado
const StyledLayout = styled.div`
  position: absolute; // Garantindo que ocupe toda a tela
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  padding-bottom: 100px;
  background-color: rgba(251, 107, 107, 1);
  z-index: -1; // Definido para -1 conforme pedido
`;

const Layout = ({ children }) => {
  const [finishedCount, setFinishedCount] = useState(0);

  const handleFinishCard = () => {
    setFinishedCount(finishedCount + 1);
  };

  return (
    <StyledLayout>
      <Header />
      <CardDisplayer cards={CARDS} onFinishCard={handleFinishCard} />
      <Footer totalCards={CARDS.length} finishedCards={finishedCount} />
    </StyledLayout>
  );
};

export default Layout;
