import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { TextField, Button, Box, CircularProgress } from "@material-ui/core";
import { LoginButton } from "./styled";

const LoginForm = () => {
  return (
    <div>
      <form>
        <TextField
          label={"E-mail"}
          placeholder={"email@email.com"}
          margin={"normal"}
          variant={"outlined"}
          type={"email"}
          required
          fullWidth
        />

        <TextField
          label={"Senha"}
          placeholder={"Mínimo 6 caracteres"}
          variant={"outlined"}
          margin={"normal"}
          type={"password"}
          required
          fullWidth
        />
        <LoginButton>Entrar</LoginButton>
      </form>
    </div>
  );
};

export default LoginForm;
