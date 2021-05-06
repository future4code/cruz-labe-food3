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
import useProtectedPage from "../../hooks/useProtectedPage";

const HomePage = () => {
  useProtectedPage();

  const { restaurants } = useContext(GlobalContext);
  const [filtred, setFilter] = useState([])
  const [categories, setCategory] = useState([])
  const history = useHistory();

  const filtredRestaurants = (category) => {
    const filter = restaurants.filter(item => 
      item.category === category  
    )
    setFilter(filter)
  }

  const filterCategory = (array) => {
    const mapCategories = array.map((item) => item.category)
    const categoriesSet = new Set(mapCategories)
    return [...categoriesSet]
  }

  useEffect(() => {
    setCategory(filterCategory(restaurants))
  }, [setCategory, restaurants])
  
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
          {categories.map(type => 
            <p key={type} onClick={() => filtredRestaurants(type)} >{type}</p>
            )}
        </TypesFoods>

        <CardSearch restaurants={filtred.length > 0 ? filtred : restaurants} />
      
      </MainContainer>
      <Footer home />
    </>
  );
};

export default HomePage;
