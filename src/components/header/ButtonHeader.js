import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/images/arrow.svg";

const ButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 14px;
`;

const ButtonHeader = (props) => {
  return (
    <>
      <ButtonContainer>
        <img src={Arrow} alt="Botão de seta" />
      </ButtonContainer>
    </>
  );
};

export default ButtonHeader;
