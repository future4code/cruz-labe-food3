import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  InputArea,
  MainContainer,
  TypesFoods,
  SearchIconHome,
} from "../homePage/style";
import { Header, InputSearch } from "./style";
import CardSearch from "../../components/home-feed/CardSearch";
import { goToSearch } from "../../routes/coordinator";
import Footer from "../../components/footer/Footer";
import GlobalContext from "../../global/globalContext";

const HomePage = () => {
  const { restaurants } = useContext(GlobalContext);
  const [filtred, setFilter] = useState([])
  const [type] = useState('Árabe')
  const history = useHistory();

  const filtredRestaurants = (category) => {
    const filter = restaurants.filter(item => 
      item.category === category  
    )
    setFilter(filter)
  }

  console.log('array fitrado apos clique',filtred)

  return (
    <>
      <MainContainer>
        <Header>FutureEats</Header>

        <InputArea>
          <InputSearch
            onClick={() => goToSearch(history)}
            name="search"
            placeholder="Restaurante"
          />
          <SearchIconHome />
        </InputArea>

        <TypesFoods>
          {restaurants.map(type => 
            <p key={type.id} onClick={() => filtredRestaurants(type.category)} color={type} >{type.category}</p>
            )}
        </TypesFoods>

        <CardSearch restaurants={filtred.length > 0 ? filtred : restaurants} />
      
      </MainContainer>
      <Footer home />
    </>
  );
};

export default HomePage;
