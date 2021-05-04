import React from "react";
import AddAddressForm from "./AddAddressForm";
import { MainContainer, Logo, TopText } from "./styled";

const AddAddressPage = () => {
  return (
    <MainContainer>
      <TopText>Meu endereço</TopText>
      <AddAddressForm />
    </MainContainer>
  );
};

export default AddAddressPage;
