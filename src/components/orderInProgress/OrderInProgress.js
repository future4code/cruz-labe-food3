import React from "react";
import {
  OrderContainer,
  OrderText,
  OrderPrice,
  RestaurantName,
  ClockContainer,
} from "./styled";
import clock from "../../images/clock.png";

const OrderInProgress = () => {
  return (
    <OrderContainer>
      <ClockContainer>
        <img src={clock} alt="" />
      </ClockContainer>
      <div>
        <OrderText>Pedido em andamento</OrderText>
        <RestaurantName>Bullger Vila Madalena</RestaurantName>
        <OrderPrice>SUBTOTAL R$67,00</OrderPrice>
      </div>
    </OrderContainer>
  );
};

export default OrderInProgress;
