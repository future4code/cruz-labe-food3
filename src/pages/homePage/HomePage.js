import React from "react";
import { CardFood, InputArea, MainContainer, TypesFoods, SearchIconHome } from "../homePage/style";
import { Header, InputSearch } from "./style";
import Food from "./image.png";


const HomePage = () => {

  return (
    <MainContainer>

      <Header>FutureEats</Header>
      
      <InputArea>
        <InputSearch name="search" placeholder="Restaurante" />
        <SearchIconHome />
      </InputArea>
      
      <TypesFoods>
        <p>Burger</p>
        <p>Asiáticas</p>
        <p>Massas</p>
        <p>Saudáveis</p>
      </TypesFoods>

      <CardFood>
        <img src={Food} />
        <div>
          <p>Bullguer Eldorado</p>
          <span>
            <p>30 - 45 min</p>
            <p>Frete R$6,00</p>
          </span>
        </div>
      </CardFood>
      
      <CardFood>
        <img src={Food} />
        <div>
          <p>Bullguer Eldorado</p>
          <span>
            <p>30 - 45 min</p>
            <p>Frete R$6,00</p>
          </span>
        </div>
      </CardFood>

    </MainContainer>
  );
};

export default HomePage;
