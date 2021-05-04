import React from "react";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { SaveButton } from "./styled";

const AddAddressForm = () => {
  return (
    <div>
      <form>
        <TextField
          label={"Logradouro"}
          placeholder={"Rua / Av."}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          label={"Número"}
          placeholder={"Número"}
          margin={"normal"}
          variant={"outlined"}
          type={"number"}
          required
          fullWidth
        />

        <TextField
          label={"Complemento"}
          placeholder={"Apto. / Bloco"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          label={"Bairro"}
          placeholder={"Bairro"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          label={"Cidade"}
          placeholder={"Cidade"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          label={"Estado"}
          placeholder={"Estado"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />
        <SaveButton>Salvar</SaveButton>
      </form>
    </div>
  );
};

export default AddAddressForm;
