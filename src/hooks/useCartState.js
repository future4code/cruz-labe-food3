import { useState } from "react";

export const useCartState = () => {
  const [cartState, setCartState] = useState([]);

  const addItemCart = (item) => {
    setCartState([...cartState, item]);
  };

  const removeItemCart = (id) => {
    const newArray = cartState.filter((item) => item.id !== id);
    setCartState(newArray);
  };

  return [cartState, addItemCart, removeItemCart];
};
