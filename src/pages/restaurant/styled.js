import styled from "styled-components";

export const CardContainer = styled.div`
  height: 80px;
`;

export const MainContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  overflow: hidden;
  overflow-y: auto;
`;

export const Cards = styled.div`
width: 92vw;
  margin: 4vw;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: -0.39px;
  font-size: 16px;
  line-height: 30px;`

export const Photo = styled.div`
  width: 100%;
  img {
    max-width: 100%;
  }
`;

export const Name = styled.div`
  width: 100%;
  color: #5cb646;
`;

export const Type = styled.div`
  width: 100%;
  color: #b8b8b8;
  color: #b8b8b8;
`;

export const Time = styled.div`
  width: 50%;
  color: #b8b8b8;
`;

export const Shipping = styled.div`
  width: 50%;
  color: #b8b8b8;
`;

export const Adress = styled.div`
  width: 100%;
  color: #b8b8b8;
`;
