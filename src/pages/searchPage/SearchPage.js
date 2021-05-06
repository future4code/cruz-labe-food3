import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  MainContainer,
  Header,
  InputArea,
  InputSearch,
  SearchIconHome,
  SearchMessage,
} from "./style";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { goToHomePage } from "../../routes/coordinator";
import GlobalContext from "../../global/globalContext";
import useForm from "../../hooks/useForm";
import CardSearch from "../../components/home-feed/CardSearch";
import useProtectedPage from "../../hooks/useProtectedPage";

const SearchPage = () => {
  useProtectedPage();

  const { restaurants } = useContext(GlobalContext);
  const [form, handleInputChange] = useForm({ search: "" });
  const history = useHistory();

  const filtredRestaurants = restaurants.filter((item) =>
    form.search ? item.name.toLowerCase().includes(form.search) : false
  );

  return (
    <MainContainer>
      <Header>
        <button onClick={() => goToHomePage(history)}>
          <ArrowBackIosIcon style={{ fontSize: 20 }} />
        </button>
        Busca
      </Header>

      <InputArea>
        <InputSearch
          required
          name="search"
          value={form.search}
          onChange={handleInputChange}
          placeholder="Restaurante"
        />
        <SearchIconHome />
      </InputArea>

      {filtredRestaurants.length === 0 && form.search.length > 0 && (
        <SearchMessage>Não encontramos :(</SearchMessage>
      )}
      {form.search === "" && (
        <SearchMessage>Busque por nome de restaurante</SearchMessage>
      )}

      <CardSearch restaurants={filtredRestaurants} />
    </MainContainer>
  );
};

export default SearchPage;
