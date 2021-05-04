import React from "react";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { SignUpButton } from "./styled";

const SignUpForm = () => {
  return (
    <div>
      <form>
        <TextField
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

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
          label={"CPF"}
          placeholder={"000.000.000-00"}
          margin={"normal"}
          variant={"outlined"}
          type={"number"}
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

        <TextField
          label={"Confirmar"}
          placeholder={"Confirme a senha anterior"}
          variant={"outlined"}
          margin={"normal"}
          type={"password"}
          required
          fullWidth
        />
        <SignUpButton>Criar</SignUpButton>
      </form>
    </div>
  );
};

export default SignUpForm;
