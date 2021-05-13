import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/images/arrow.svg";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";

const ButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 14px;
`;

const ButtonHeader = (props) => {
  const history = useHistory();
  return (
    <>
      <ButtonContainer onClick={() => goToLastPage(history)}>
        <img src={Arrow} alt=""/>
      </ButtonContainer>
    </>
  );
};

export default ButtonHeader;
