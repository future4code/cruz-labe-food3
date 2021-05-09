import React from "react";
import AddAddressForm from "./AddAddressForm";
import { MainContainer, TopText } from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/header/Header";

const AddAddressPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header name={""} />
      <MainContainer>
        <TopText>Meu endereço</TopText>
        <AddAddressForm />
      </MainContainer>
    </div>
  );
};

export default AddAddressPage;
