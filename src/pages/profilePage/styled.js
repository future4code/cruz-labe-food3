import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 102px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 8px;

  & > P {
    margin-top: 8px;
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
  margin-top: 64px;
  font-size: 16px;
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
  height: 10vh;
  background-color: #eeeeee;
  justify-content: center;
  margin-top: 20px;

  & > p {
    margin-top: 5px;
  }

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
    height: 24px;
  }

  button {
    background-color: transparent;
    border: none;
    height: 10px;
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

export const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const Email = styled.p`
  line-height: 1.7;
  margin-bottom: 1px;
`;
