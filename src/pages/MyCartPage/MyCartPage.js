import { FormControlLabel, RadioGroup } from "@material-ui/core";
import React from "react";
import Footer from "../../components/footer/Footer";
import useForm from "../../hooks/useForm";
import { getActiveOrder } from "../../services/getActiveOrder";
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
  const [form, handleInputChange] = useForm(initialValue);
  const onClickConfirm = async () => {
    window.event.preventDefault();

    const { paymentMethod } = form;

    const body = {
      products: [],
      paymentMethod,
    };

    const hasOrder = await getActiveOrder();

    if (!hasOrder.order) {
      const result = await placeOrder("id", body);

      if (result.status) {
      } else {
        console.log(result.message);
      }
    }
  };

  return (
    <>
      <ContainerMyCart>
        <ContainerHeader>
          <HeaderCart>Meu carrinho</HeaderCart>

          <AdressCard>
            <AdressLabel>Endereço de entrega</AdressLabel>
            <Adress>Rua Alessandra Vieira, 42</Adress>
          </AdressCard>
        </ContainerHeader>
        <p>Carrinho vazio</p>
        <ContainerScroll>
          {/* <Order /> */}
          <ContainerPayment onSubmit={onClickConfirm}>
            <ContainerValues>
              <p>Frete: R$ 0,00</p>

              <SubTotal>
                <span>SUBTOTAL</span>
                <TotalValue>R$ 00,00</TotalValue>
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
            <ConfirmButton type="submit" disabled={false}>
              Confirmar
            </ConfirmButton>
          </ContainerPayment>
        </ContainerScroll>
      </ContainerMyCart>
      <Footer cart />
    </>
  );
}
