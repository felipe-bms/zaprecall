import React, { useState } from "react";
import styled from "styled-components";

// Componentes de Estilo Básico
const CardContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  width: 300px;
  border-radius: 5px;
  padding: 15px;
  color: rgba(51, 51, 51, 1);
  align-items: center;
  justify-content: space-between;
  font-family: Recursive;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  text-align: left;
`;

// Card 1: Número do Card
const CardNumber = styled(CardContainer)`
  background-color: #e0f7fa;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
`;

// Card 2: Pergunta
const CardQuestion = styled(CardContainer)`
  background-color: rgba(255, 255, 212, 1);
  height: 170px;
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  color: rgba(51, 51, 51, 1);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  align-items: start;
`;

const StyledImage = styled.img`
  position: absolute;
  right: 20px;
  bottom: 10px;
`;

// Card 3: Resposta
const CardAnswer = styled(CardContainer)`
  background-color: rgba(255, 255, 212, 1);
  height: 170px;
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  color: rgba(51, 51, 51, 1);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  align-items: start;
`;

// Card 4: Finalização
const CardFinish = styled(CardContainer)`
  background-color: #e0f7fa;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  text-decoration: line-through;
  color: ${({ textColor }) => textColor || "#1b5e20"}; // Dynamic text color
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StyledOptions = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 85.17px;
  height: 37.17px;
  border-radius: 5px;
  font-family: Recursive;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  background-color: ${({ bgColor }) => bgColor || "#1b5e20"};
`;

const StyledOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  gap: 8px;
  bottom: 20px;
`;

const Card = ({ id, question, answer, onFinishCard }) => {
  const [screen, setScreen] = useState(1);
  const [finishColor, setFinishColor] = useState("#1b5e20");
  const [finishIcon, setFinishIcon] = useState("");

  const handleAnswer = (color, icon) => {
    onFinishCard();
    setFinishColor(color);
    setFinishIcon(icon);
    setScreen(4);
  };

  return (
    <div>
      <CardNumber show={screen === 1}>
        <div>Pergunta {id}</div>
        <StyledButton onClick={() => setScreen(2)}>
          <img src="/assets/seta_play.png" alt="play" />
        </StyledButton>
      </CardNumber>
      <CardQuestion show={screen === 2}>
        <div>{question}</div>
        <StyledButton onClick={() => setScreen(3)}>
          <StyledImage src="/assets/seta_virar.png" alt="flip" />
        </StyledButton>
      </CardQuestion>
      <CardAnswer show={screen === 3}>
        <div>{answer}</div>
        <StyledOptionsContainer>
          <StyledOptions
            bgColor="rgba(255, 48, 48, 1)"
            onClick={() =>
              handleAnswer("rgba(255, 48, 48, 1)", "/assets/icone_erro.png")
            }
          >
            Não lembrei
          </StyledOptions>
          <StyledOptions
            bgColor="rgba(255, 146, 46, 1)"
            onClick={() =>
              handleAnswer("rgba(255, 146, 46, 1)", "/assets/icone_quase.png")
            }
          >
            Quase não lembrei
          </StyledOptions>
          <StyledOptions
            bgColor="rgba(47, 190, 52, 1)"
            onClick={() =>
              handleAnswer("rgba(47, 190, 52, 1)", "/assets/icone_certo.png")
            }
          >
            Zap!
          </StyledOptions>
        </StyledOptionsContainer>
      </CardAnswer>
      <CardFinish show={screen === 4} textColor={finishColor}>
        <div>Card Finish</div>
        <img src={finishIcon} alt="result icon" />
      </CardFinish>
    </div>
  );
};

export default Card;
