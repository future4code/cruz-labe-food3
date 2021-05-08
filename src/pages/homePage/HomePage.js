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
import OrderInProgress from "../../components/orderInProgress/OrderInProgress";
import { getActiveOrder } from "../../services/getActiveOrder";
import Loading from "../../components/loading/Loading";

const HomePage = () => {
  useProtectedPage();

  const { restaurants, setIsUpdate } = useContext(GlobalContext);
  const [filtered, setFilter] = useState([]);
  const [categories, setCategory] = useState([]);
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const filtredRestaurants = (category) => {
    const filter = restaurants?.filter((item) => item.category === category);
    setFilter(filter);
  };

  const filterCategory = (array) => {
    const mapCategories = array.map((item) => item.category);
    const categoriesSet = new Set(mapCategories);
    return [...categoriesSet];
  };

  useEffect(() => {
    setIsUpdate(true);
    if (restaurants.length) setCategory(filterCategory(restaurants));
  }, [setCategory, restaurants]);

  useEffect(() => {
    (async () => {
      const result = await getActiveOrder();
      result.status && setOrders(result.order);
    })();
  }, []);

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
          {categories?.map((type) => (
            <p key={type} onClick={() => filtredRestaurants(type)}>
              {type}
            </p>
          ))}
        </TypesFoods>

        <CardSearch
          restaurants={filtered.length > 0 ? filtered : restaurants}
        />
      </MainContainer>
      {orders !== null && orders.length !== 0 && orders !== undefined ? (
        <OrderInProgress />
      ) : (
        ""
      )}
      <Footer home />
    </>
  );
};

export default HomePage;
