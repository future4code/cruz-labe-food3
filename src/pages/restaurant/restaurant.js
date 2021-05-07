import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "../../components/restaurants/card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  CardContainer,
  MainContainer,
  Cards,
  Photo,
  Name,
  Type,
  Time,
  Shipping,
  Adress,
} from "./styled";
import { getRestaurantDetail } from "../../services/getRestaurantDetail";
import GlobalContext from "../../global/globalContext";


const Restaurant = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const { idRest } = useParams();
  const history = useHistory();
  const [infoRestaurant, setInfoRestaurant] = useState({});

  useEffect(() => {
    if (restaurantDetail) {
      const { name, deliveryTime, address, shipping, id } = restaurantDetail;
      setInfoRestaurant({
        id,
        name,
        deliveryTime,
        address,
        shipping,
      });
    }
  }, [restaurantDetail]);

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
<
   <CardContainer> <Header name={"Restaurante"} /></CardContainer>
       <MainContainer> {restaurantDetail && (
         
          <div>    <Cards>

            <Photo>
              <img src={restaurantDetail.logoUrl} />
            </Photo>
            <Name> {restaurantDetail.name} </Name>
            <Type>{restaurantDetail.category} </Type>
            <Time> {restaurantDetail.deliveryTime} min </Time>
            <Shipping>
              R${restaurantDetail.shipping.toFixed(2).replace(".", ",")}
            </Shipping>
            <Adress> {restaurantDetail.address} </Adress>

            </Cards>

            </div>
          
        )}


      {restaurantDetail && (
        <Card
          infoRestaurant={infoRestaurant}
          products={restaurantDetail.products}
        />
      )}
    </MainContainer>
 

      <Footer restaurant />
    </div>
  );
};

export default Restaurant;
