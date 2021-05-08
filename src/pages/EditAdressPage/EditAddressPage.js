import React from "react";
import EditAddressForm from "./EditAddressForm";
import { MainContainer, TopText } from "./styled";
import Header from "../../components/header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";

const EditAddressPage = () => {
  useProtectedPage();
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
