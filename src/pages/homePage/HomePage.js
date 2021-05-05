import React from "react";
import { useHistory } from "react-router-dom"
import { InputArea, MainContainer, TypesFoods, SearchIconHome } from "../homePage/style";
import { Header, InputSearch } from "./style";
import CardSearch from "../../components/home-feed/CardSearch"
import { goToSearch } from "../../routes/coordinator";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const history = useHistory()

  return (
    <MainContainer>

      <Header>FutureEats</Header>
      
      <InputArea>
        <InputSearch onClick={() => goToSearch(history)} name="search" placeholder="Restaurante" />
        <SearchIconHome />
      </InputArea>
      
      <TypesFoods>
        <p>Burger</p>
        <p>Asiáticas</p>
        <p>Massas</p>
        <p>Saudáveis</p>
      </TypesFoods>

      <CardSearch />
      <CardSearch />
      <CardSearch />
      
      <CardSearch />

      <Footer home />
    </MainContainer>
  );
};

export default HomePage;
