import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { SaveButton } from "./styled";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { addAddress } from "../../services/addAddress";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "16px",
  },
}));

const AddAddressForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = async () => {
    window.event.preventDefault();
    const result = await addAddress(form);
    localStorage.setItem("token", result.token);
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"street"}
          value={form.street}
          onChange={onChange}
          label={"Logradouro"}
          placeholder={"Rua / Av."}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={onChange}
          label={"Número"}
          placeholder={"Número"}
          margin={"normal"}
          variant={"outlined"}
          type={"number"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          label={"Complemento"}
          placeholder={"Apto. / Bloco"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro"}
          placeholder={"Bairro"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={onChange}
          label={"Cidade"}
          placeholder={"Cidade"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          InputProps={{
            inputProps: {
              pattern: "[^-s][a-zA-ZÀ-ú ]*",
            },
          }}
          name={"state"}
          value={form.state}
          onChange={onChange}
          label={"Estado"}
          placeholder={"Estado"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <SaveButton type={"submit"}>Salvar</SaveButton>
      </form>
    </div>
  );
};

export default AddAddressForm;
