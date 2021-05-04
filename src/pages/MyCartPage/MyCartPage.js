import { FormControlLabel, RadioGroup } from "@material-ui/core";
import React from "react";
import Footer from "../../components/footer/Footer";
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

export default function MyCartPage() {
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
          <ContainerPayment>
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
              <RadioGroup>
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
            <ConfirmButton disabled={false}>Confirmar</ConfirmButton>
          </ContainerPayment>
        </ContainerScroll>
      </ContainerMyCart>
      <Footer cart />
    </>
  );
}
