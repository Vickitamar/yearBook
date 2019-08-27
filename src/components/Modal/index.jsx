import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Books from "../Books";
import { Image } from "../../App";

const OverFlowHidden = createGlobalStyle`
  body {
      overflow: hidden;
  }
`;

const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 25%;
  right: 25%;
  width: 800px;
  padding: 15px;
  border: 2px solid #444;
`;

export function Modal({ match, history }) {
  let image = Books[parseInt(match.params.id, 10) - 1];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 5000,
        background: "rgba(0, 0, 0, 0.8)"
      }}
    >
      <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
        <OverFlowHidden />
        <h1>{image.title}</h1>
        <Image inModal index={image.id} />
        <button type="button" onClick={back}>
          Close
        </button>
      </ModalStyled>
    </div>
  );
}
