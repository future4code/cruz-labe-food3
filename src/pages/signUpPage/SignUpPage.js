import React from "react";
import SignUpForm from "./SignUpForm";
import logo from "../../images/logo-future-eats-invert.png";
import { MainContainer, Logo, TopText } from "./styled";

const SignUpPage = () => {
  return (
    <MainContainer>
      <Logo src={logo} />
      <TopText>Cadastrar</TopText>
      <SignUpForm />
    </MainContainer>
  );
};

export default SignUpPage;
