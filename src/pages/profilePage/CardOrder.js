import React from "react";
import { CardContainer } from "./styled";

const CardOrder = (props) => {
  return (
    <CardContainer>
      <p>{props.restaurantName}</p>
      <p>{props.createdAt}</p>
      <p>SUBTOTAL R${props.totalPrice}</p>
    </CardContainer>
  );
};

export default CardOrder;
