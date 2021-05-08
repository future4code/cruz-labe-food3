import React from "react";
import SignUpForm from "./SignUpForm";
import logo from "../../assets/images/logo-future-eats-invert.png";
import { MainContainer, Logo, TopText, Header, ArrowContainer } from "./styled";
import Arrow from "../../assets/images/arrow.svg";
import { useHistory } from "react-router";
import { goToLoginPage } from "../../routes/coordinator";

const SignUpPage = () => {
  const history = useHistory();

  return (
    <div>
      <Header>
        <ArrowContainer
          src={Arrow}
          onClick={() => goToLoginPage(history)}
          alt="seta para voltar"
        />
      </Header>
      <MainContainer>
        <Logo src={logo} />
        <TopText>Cadastrar</TopText>
        <SignUpForm />
      </MainContainer>
    </div>
  );
};

export default SignUpPage;
