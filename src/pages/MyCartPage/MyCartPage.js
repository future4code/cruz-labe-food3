import { FormControlLabel, RadioGroup } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import GlobalContext from "../../global/globalContext";
import useForm from "../../hooks/useForm";
import { goToHomePage } from "../../routes/coordinator";
import { getActiveOrder } from "../../services/getActiveOrder";
import { getFullAdress } from "../../services/getFullAdress";
import { placeOrder } from "../../services/placeOrder";
import Order from "./Order";
import {
  Adress,
  AdressCard,
  AdressLabel,
  ContainerMyCart,
  ContainerPayment,
  HeaderCart,
  ContainerValues,
  SubTotal,
  TotalValue,
  RadioBlack,
  PaymentType,
  PaymentTypeTitle,
  ConfirmButton,
  ContainerHeader,
  ContainerScroll,
} from "./styled";

const initialValue = {
  paymentMethod: "",
};

export default function MyCartPage() {
  const [userAddress, setUserAddress] = useState("");
  const [form, handleInputChange] = useForm(initialValue);
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    const totalValue = cart.cartState.reduce((acc, curr) => {
      return acc + curr.totalValue;
    }, 0);

    setTotalCart(totalValue + Number(cart.infoRest.shipping));
  }, [cart.cartState]);

  useEffect(() => {
    (async () => {
      const result = await getFullAdress();

      if (result.status) {
        const { street, number } = result.address;
        const addressString = `${street}, ${number}`;
        setUserAddress(addressString);
      }
    })();
  }, []);

  const onClickConfirm = async () => {
    window.event.preventDefault();

    const { paymentMethod } = form;

    const products = cart.cartState.map((item) => {
      const { id, quantity } = item;

      return { id, quantity };
    });

    const body = {
      products,
      paymentMethod,
    };

    const hasOrder = await getActiveOrder();

    if (!hasOrder.order) {
      const result = await placeOrder(cart.infoRest.id, body);

      if (result.status) {
        goToHomePage(history);
      } else {
        console.log(result.message);
      }
    }
  };

  const toMoney = (value) => {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <ContainerMyCart>
        <ContainerHeader>
          <HeaderCart>Meu carrinho</HeaderCart>

          <AdressCard>
            <AdressLabel>Endereço de entrega</AdressLabel>
            <Adress>{userAddress}</Adress>
          </AdressCard>
        </ContainerHeader>
        {cart.cartState.length === 0 && <p>Carrinho vazio</p>}
        <ContainerScroll>
          {cart.cartState.length > 0 && <Order />}
          <ContainerPayment onSubmit={onClickConfirm}>
            <ContainerValues>
              <p>
                Frete:{" "}
                {cart.infoRest.shipping
                  ? toMoney(cart.infoRest.shipping)
                  : "R$ 0,00"}
              </p>

              <SubTotal>
                <span>SUBTOTAL</span>
                <TotalValue>
                  {cart.cartState.length > 0 ? toMoney(totalCart) : "R$ 00,00"}
                </TotalValue>
              </SubTotal>
            </ContainerValues>

            <PaymentType>
              <PaymentTypeTitle>Forma de pagamento</PaymentTypeTitle>
              <hr />
              <RadioGroup name="paymentMethod" onChange={handleInputChange}>
                <FormControlLabel
                  value="money"
                  control={<RadioBlack />}
                  label="Dinheiro"
                />
                <FormControlLabel
                  value="creditcard"
                  control={<RadioBlack />}
                  label="Cartão de crédito"
                />
              </RadioGroup>
            </PaymentType>
            <ConfirmButton
              type="submit"
              disabled={cart.cartState.length === 0 ? true : false}
            >
              Confirmar
            </ConfirmButton>
          </ContainerPayment>
        </ContainerScroll>
      </ContainerMyCart>
      <Footer cart />
    </>
  );
}
