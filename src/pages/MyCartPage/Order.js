import React from "react";
import {
  CardItem,
  ContainerOrder,
  LabelRestaurantName,
  RestaurantAdress,
} from "./styled";

export default function Order() {
  return (
    <ContainerOrder>
      <RestaurantAdress>
        <LabelRestaurantName>Bullguer Vila Madalena</LabelRestaurantName>
        <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
        <p>30 - 40 mim</p>
      </RestaurantAdress>
      <CardItem />
      <CardItem />
    </ContainerOrder>
  );
}
