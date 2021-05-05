import React, { useEffect, useState } from "react";
import { getRestaurants } from "../services/getRestaurants";
import GlobalContext from "./globalContext";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);

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
    <GlobalContext.Provider value={{ restaurants }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
