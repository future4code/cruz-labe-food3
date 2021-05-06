import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { SaveButton } from "./styled";
import clsx from "clsx";
import { updateProfile } from "../../services/updateProfile";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "16px",
  },
}));

const EditProfileForm = () => {
  const classes = useStyles();

  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const onSubmitForm = async () => {
    window.event.preventDefault();
    const result = await updateProfile(form);
    alert("Perfil atualizado com sucesso! :)");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          placeholder={"Nome completo"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          placeholder={"E-mail"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          label={"CPF"}
          placeholder={"CPF"}
          margin={"normal"}
          variant={"outlined"}
          type={"number"}
          required
          fullWidth
          className={clsx(classes.margin, classes.textField)}
        />

        <SaveButton type={"submit"}>Salvar</SaveButton>
      </form>
    </div>
  );
};

export default EditProfileForm;
