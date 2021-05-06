import React from "react";
import EditAddressForm from "./EditAddressForm";
import { MainContainer, Logo, TopText } from "./styled";
import Header from "../../components/header/Header";

const EditAddressPage = () => {
  return (
    <>
      <Header name={"Endereço"} />
      <MainContainer>
        <TopText></TopText>
        <EditAddressForm />
      </MainContainer>
    </>
  );
};

export default EditAddressPage;
