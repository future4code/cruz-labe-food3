import React, { useContext } from "react";
import Card from "../../components/restaurants/card";
import GlobalContext from "../../global/globalContext";
import {
  ContainerOrder,
  LabelRestaurantName,
  RestaurantAdress,
} from "./styled";

export default function Order() {
  const { cart } = useContext(GlobalContext);
  return (
    <ContainerOrder>
      <RestaurantAdress>
        <LabelRestaurantName>{cart.infoRest.name}</LabelRestaurantName>
        <p>{cart.infoRest.address}</p>
        <p>{cart.infoRest.deliveryTime} min</p>
      </RestaurantAdress>
      <Card inCart products={cart.cartState} />
    </ContainerOrder>
  );
}
