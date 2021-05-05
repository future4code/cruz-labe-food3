import React from "react";
import styled from "styled-components";
import Arrow from "../../images/arrow.svg";

const ButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 14px;
`;

const ButtonHeader = (props) => {
  return (
    <>
      <ButtonContainer>
        <img src={Arrow} />
      </ButtonContainer>
    </>
  );
};

export default ButtonHeader;
