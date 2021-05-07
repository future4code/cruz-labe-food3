import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "../../components/restaurants/card";
import Header from "../../components/header/Header";
import {
  CardContainer,
  MainContainer,
  Photo,
  Name,
  Type,
  Time,
  Shipping,
  Adress,
} from "./styled";
import { getRestaurantDetail } from "../../services/getRestaurantDetail";

const Restaurant = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  const { idRest } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const result = await getRestaurantDetail(idRest);

      if (result.status) {
        setRestaurantDetail(result.restaurant);
      }
    })();
  }, []);

  return (
    <div>
   <CardContainer> <Header name={"Restaurante"} /></CardContainer>
        {restaurantDetail && (
         
          <div>     <MainContainer>
            <Photo>
              <img src={restaurantDetail.logoUrl} />
            </Photo>
            <Name> {restaurantDetail.name} </Name>
            <Type>{restaurantDetail.category} </Type>
            <Time> {restaurantDetail.deliveryTime} min </Time>
            <Shipping>R${restaurantDetail.shipping.toFixed(2)}</Shipping>
            <Adress> {restaurantDetail.address} </Adress>
            </MainContainer> </div>
          
        )}


      {restaurantDetail && <Card products={restaurantDetail.products} />}
    </div>
  );
};

export default Restaurant;
