import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  top: 0;
  position: fixed;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #b8b8b8;
  background-color: #ffffff;

  & > button {
    position: absolute;
    top: 32%;
    left: 0;
  }
`;

export const MainContainer = styled.div`
  & > button {
    margin: 20px;
    background-color: red;
    position: absolute;
  }
`;
