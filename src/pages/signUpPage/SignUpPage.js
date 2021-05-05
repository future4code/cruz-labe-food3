import React from "react";
import SignUpForm from "./SignUpForm";
import logo from "../../images/logo-future-eats-invert.png";
import { MainContainer, Logo, TopText, Header, ArrowContainer } from "./styled";
import Arrow from "../../images/arrow.svg";
import { useHistory } from "react-router";
import { goToLastPage, goToLoginPage } from "../../routes/coordinator";
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
