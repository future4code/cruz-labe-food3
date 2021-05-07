import React, { useState, useEffect, useContext } from "react";
import {
  OrderContainer,
  OrderText,
  OrderPriceContainer,
  RestaurantName,
  ClockContainer,
  Price,
} from "./styled";
import clock from "../../images/clock.png";
import { getActiveOrder } from "../../services/getActiveOrder";
import GlobalContext from "../../global/globalContext";

const OrderInProgress = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getActiveOrder();
      result.status && setOrders(result.order);
    })();
  }, []);

  return (
    <OrderContainer>
      <ClockContainer>
        <img src={clock} alt="" />
      </ClockContainer>
      <div>
        <OrderText>Pedido em andamento</OrderText>
        <RestaurantName>{orders.restaurantName}</RestaurantName>
        <OrderPriceContainer>
          <Price>SUBTOTAL</Price>
          {orders.totalPrice &&
            orders.totalPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </OrderPriceContainer>
      </div>
    </OrderContainer>
  );
};

export default OrderInProgress;
