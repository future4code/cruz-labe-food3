import React from "react";
import AddAddressForm from "./AddAddressForm";
import { MainContainer, Logo, TopText, Header, ArrowContainer } from "./styled";
import Arrow from "../../images/arrow.svg";
import { useHistory } from "react-router";
import { goToSignUpPage } from "../../routes/coordinator";

const AddAddressPage = () => {
  const history = useHistory();

  return (
    <div>
      <Header>
        <ArrowContainer
          src={Arrow}
          onClick={() => goToSignUpPage(history)}
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
