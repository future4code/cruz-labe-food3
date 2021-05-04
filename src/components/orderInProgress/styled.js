import styled from "styled-components";

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  background-color: #5cb646;
  letter-spacing: -0.39px;
  width: 100vw;
  margin-top: 485px;
  height: 118px;
  justify-content: center;
  align-items: center;
`;

export const OrderText = styled.p`
  color: #ffffff;
`;

export const OrderPrice = styled.p`
  font-weight: bold;
`;

export const ClockContainer = styled.div`
  justify-self: center;
  align-self: center;
`;

export const RestaurantName = styled.p`
  line-height: 3px;
`;
