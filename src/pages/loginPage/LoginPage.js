import React from "react";
import { Button, Box } from "@material-ui/core";
import LoginForm from "./LoginForm";
import logo from "../../images/logo-future-eats-invert.png";
import {
  MainContainer,
  Logo,
  TopText,
  SignUpButton,
  StyledBox,
} from "./styled";

const LoginPage = () => {
  return (
    <MainContainer>
      <Logo src={logo} />
      <TopText>Entrar</TopText>
      <LoginForm />
      <SignUpButton>Não possui cadastro? Clique aqui.</SignUpButton>
    </MainContainer>
  );
};

export default LoginPage;
