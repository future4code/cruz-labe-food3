import React, { useState, useContext } from "react";
import {
  MainContainer,
  Photo,
  Align,
  Name,
  Quantity,
  Description,
  Price,
  Remove,
  H3,
} from "./styled";
import GlobalContext from "../../global/globalContext";
import ModalQuantity from "./ModalQuantity";

const Card = ({ products, inCart, infoRestaurant }) => {
  const [qtd, handleQtd] = useState(1);
  const { cart } = useContext(GlobalContext);

  const onChangeSelected = (e) => {
    handleQtd(e.target.value);
  };

  const addCart = (item) => {
    if (!cart.infoRest.id || cart.infoRest.id === infoRestaurant.id) {
      cart.setInfoRest(infoRestaurant);

      const product = {
        ...item,
        quantity: qtd,
        totalValue: item.price * qtd,
      };

      cart.addItemCart(product);
      handleQtd(qtd);
    } else {
      alert(
        "Existem itens de outro restaurante no carrinho! Para prosseguir, por favor remova-os"
      );
    }
  };

  const removeCart = (id) => {
    cart.removeItemCart(id);
  };

  const restaurantList = products.map((item) => {
    const itemCart = cart.cartState.find((product) => product.id === item.id);

    return (
      <div key={item.id}>
        {!inCart && <H3>{item.category} </H3>}
        <MainContainer>
          <Photo>
            <img src={item.photoUrl} />
          </Photo>
          <Align>
            <Name>{item.name}</Name>
            {itemCart && <Quantity>{itemCart.quantity}</Quantity>}

            <Description>{item.description}</Description>
            <Price>R${item.price.toFixed(2).replace(".", ",")}</Price>

            {itemCart && (
              <Remove onClick={() => removeCart(item.id)}>Remover</Remove>
            )}
            {!itemCart && (
              <ModalQuantity
                item={item}
                addCart={addCart}
                qtd={qtd}
                onChangeSelected={onChangeSelected}
              />
            )}
          </Align>
        </MainContainer>
      </div>
    );
  });

  return <div>{restaurantList}</div>;
};

export default Card;
