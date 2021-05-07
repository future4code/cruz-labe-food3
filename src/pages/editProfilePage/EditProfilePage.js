import React from "react";
import EditProfileForm from "./EditProfileForm";
import { MainContainer, TopText, Header, ArrowContainer } from "./styled";
import Arrow from "../../images/arrow.svg";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";

const EditProfilePage = () => {
  const history = useHistory();

  return (
    <div>
      <Header>
        <ArrowContainer
          src={Arrow}
          onClick={() => goToLastPage(history)}
          alt="seta para voltar"
        />
        <TopText>Editar</TopText>
      </Header>
      <MainContainer>
        <EditProfileForm />
      </MainContainer>
    </div>
  );
};

export default EditProfilePage;
