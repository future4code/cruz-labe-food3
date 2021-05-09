import React from "react";
import EditProfileForm from "./EditProfileForm";
import { MainContainer } from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/header/Header";

const EditProfilePage = () => {
  useProtectedPage();

  return (
    <div>
      <Header name={"Editar"} />
      <MainContainer>
        <EditProfileForm />
      </MainContainer>
    </div>
  );
};

export default EditProfilePage;
