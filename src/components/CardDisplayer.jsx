import React from "react";
import styled from "styled-components";
import Card from "./Card";
import CARDS from "../data/CARDS";

// Estilizando o container do CardDisplayer
const CardDisplayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

// Componente CardDisplayer
const CardDisplayer = ({ onFinishCard }) => {
  return (
    <CardDisplayerContainer>
      {CARDS.map((card, index) => (
        <Card
          key={index}
          id={index + 1}
          question={card.question}
          answer={card.answer}
          onFinishCard={onFinishCard}
        />
      ))}
    </CardDisplayerContainer>
  );
};

export default CardDisplayer;
