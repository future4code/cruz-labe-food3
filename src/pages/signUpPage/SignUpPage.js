import React from "react";
import SignUpForm from "./SignUpForm";
import logo from "../../assets/images/logo-future-eats-invert.png";
import { MainContainer, Logo, TopText } from "./styled";
import Header from "../../components/header/Header";

const SignUpPage = () => {
  return (
    <div>
      <Header name={""} />

      <MainContainer>
        <Logo src={logo} />
        <TopText>Cadastrar</TopText>
        <SignUpForm />
      </MainContainer>
    </div>
  );
};

export default SignUpPage;
