import React, { useEffect, useState } from "react";
import { useCartState } from "../hooks/useCartState";
import { getRestaurants } from "../services/getRestaurants";
import GlobalContext from "./globalContext";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [cartState, addItemCart, removeItemCart] = useCartState();

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

  return (
    <GlobalContext.Provider value={{ restaurants, cart }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
