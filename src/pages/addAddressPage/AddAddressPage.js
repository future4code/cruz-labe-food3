import React from "react";
import AddAddressForm from "./AddAddressForm";
import { MainContainer, TopText, Header, ArrowContainer } from "./styled";
import Arrow from "../../assets/images/arrow.svg";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddAddressPage = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <div>
      <Header>
        <ArrowContainer
          src={Arrow}
          onClick={() => goToLastPage(history)}
          alt="seta para voltar"
        />
      </Header>
      <MainContainer>
        <TopText>Meu endereço</TopText>
        <AddAddressForm />
      </MainContainer>
    </div>
  );
};

export default AddAddressPage;
