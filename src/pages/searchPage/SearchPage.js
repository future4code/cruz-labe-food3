import React from "react";
import { useHistory } from "react-router-dom"
import { MainContainer, Header, InputArea, InputSearch, SearchIconHome, SearchMessage } from "./style";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { goToHomePage } from "../../routes/coordinator";

const SearchPage = () => {
  const history = useHistory()
    
  return (
    <MainContainer>
      <Header>
        <button onClick={() => goToHomePage(history)}>
          <ArrowBackIosIcon style={{ fontSize: 20 }} />
        </button>
        Busca
      </Header>

      <InputArea>
        <InputSearch name="search" placeholder="Restaurante" />
        <SearchIconHome />
      </InputArea>

      <SearchMessage>
          Busque por nome de restaurante
      </SearchMessage>

      {/* Vai ser o resultado da busca 
      <CardFood /> */}
      
    </MainContainer>
  );
};

export default SearchPage;