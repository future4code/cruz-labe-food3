import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 20px 20px 20px;
`;

export const SaveButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  background-color: #5cb646;
  margin-top: 16px;
  height: 42px;
`;

export const TopText = styled.p`
  justify-self: center;
`;

export const Header = styled.header`
  height: 44px;
  margin: 0 auto;
  border-bottom: 1px solid lightgray;
  width: 100vw;
  display: grid;
  grid-template-columns: 1px 1fr;
  align-items: center;
  justify-content: center;
`;

export const ArrowContainer = styled.img`
  margin-left: 16px;
  cursor: pointer;
`;
