import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const OverFlowHidden = createGlobalStyle`
  body {
      overflow: hidden;
  }
`;

const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 28%;
  right: 25%;
  width: 800px;
  height: 500px;
  padding: 15px;
  border: 2px solid #444;
  @media (max-width: 990px) {
    left: 0;
    right: 0;
    top: ${({ top }) => top}px;
    width: auto;
  }
`;

const StyledDescription = styled.p`
  line-height: 1.6;
  letter-spacing: 1px;
`;

const StyledTitleClose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border: none;
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const VickiModal = props => {
  if (!props.selectedBook) {
    return null;
  }
  return (
    <div className="backdrop">
      <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
        <OverFlowHidden />
        <StyledTitleClose>
          <h1>{props.selectedBook.title}</h1>
          <StyledButton type="button" onClick={props.close}>
            X
          </StyledButton>
        </StyledTitleClose>
        <h2>{props.selectedBook.author}</h2>
        <StyledDescription>
          Alors que le tsar montait sur un des flancs de la talions, qui a
          présenté les armes, un autre groupe des cavaliers galopèrent jusqu'au
          flanc opposé, et à leur tête, Rostov a reconnu le poleon. Ce ne
          pourrait être personne d'autre. Il est venu à galop, coiffé d'un petit
          chapeau, d'un uniforme bleu ouvert sur un gilet blanc, et la côte St.
          Andrew bon sur son épaule. Il chevauchait très beau cheval arabe gris
          pur-sang avec un cramoisi sellette en fils d'or brodée. Sur en
          approchant Alexandre, il releva son chapeau et il l'a fait, Rost6v,
          avec son œil de cavalier, ne pouvait s'empêcher de remarquer que
          Napoléon n'avait pas bien s'asseoir ou fermement sur la selle. Les
          bataillons cria "Hourra!" et "Vive l'Empereur!" Napoléon dit quelque
          chose à Alexandre et les deux empereurs descendirent et se prirent
          mutuellement. les mains de l'er. Le visage de Napoléon portait un
          malheur- fourmi et sourire artificiel. Alexandre disait quelque chose
          d'affable pour lui.
        </StyledDescription>
      </ModalStyled>
    </div>
  );
};

export default VickiModal;
