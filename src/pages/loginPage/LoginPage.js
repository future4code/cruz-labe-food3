import React from "react";
import LoginForm from "./LoginForm";
import logo from "../../images/logo-future-eats-invert.png";
import { MainContainer, Logo, TopText, SignUpButton } from "./styled";
import { goToSignUpPage } from "../../routes/coordinator";
import { useHistory } from "react-router";

const LoginPage = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <Logo src={logo} />
      <TopText>Entrar</TopText>
      <LoginForm />
      <SignUpButton onClick={() => goToSignUpPage(history)}>
        Não possui cadastro? Clique aqui.
      </SignUpButton>
    </MainContainer>
  );
};

export default LoginPage;
