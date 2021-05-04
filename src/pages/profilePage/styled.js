import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 102px;
  border: 1px solid lightgray;
  line-height: 0;
  border-radius: 10px;

  & > P {
    margin-left: 16px;
  }

  & > p:nth-child(1) {
    color: #5cb646;
  }
  & > p:nth-child(2) {
    font-size: 12px;
  }
  & > p:nth-child(3) {
    font-weight: bold;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 64px;
  font-size: 16px;
  line-height: 0;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-left: 16px;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #eeeeee;
  justify-content: center;

  & > p:nth-child(1) {
    color: #b8b8b8;
  }

  & > button {
    background-color: transparent;
    border: none;
    align-self: flex-end;
    position: absolute;
    margin-top: 5px;
    margin-right: 10px;
    & > img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const EditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 16px;

  img {
    width: 24px;
    heigth: 24px;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export const OrdersHistoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 16px;
  margin-right: 16px;

  & > p {
    margin-top: 20px;
    border-bottom: 1px solid black;
  }
`;
