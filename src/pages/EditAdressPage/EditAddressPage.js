import React from "react";
import EditAddressForm from "./EditAddressForm";
import { MainContainer } from "./styled";
import Header from "../../components/header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";

const EditAddressPage = () => {
  useProtectedPage();
  return (
    <>
      <Header name={"Endereço"} />
      <MainContainer>
        <EditAddressForm />
      </MainContainer>
    </>
  );
};

export default EditAddressPage;
