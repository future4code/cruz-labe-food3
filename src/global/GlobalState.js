import React, { useEffect, useState } from "react";
import { useCartState } from "../hooks/useCartState";
import { getActiveOrder } from "../services/getActiveOrder";
import { getRestaurants } from "../services/getRestaurants";
import GlobalContext from "./globalContext";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [cartState, addItemCart, removeItemCart] = useCartState();
  const [orders, setOrders] = useState([]);

  const cart = {
    cartState,
    addItemCart,
    removeItemCart,
  };

  useEffect(() => {
    (async () => {
      const res = await getRestaurants();

      if (res.status) {
        setRestaurants(res.restaurants);
      } else {
        console.log(res.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getActiveOrder();
      console.log("res.order aqui:", res.order);

      res.status && setOrders(res.order);
    })();
  }, []);

  return (
    <GlobalContext.Provider value={{ restaurants, cart, orders }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
