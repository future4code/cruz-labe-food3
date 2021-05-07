import React, { useState, useEffect, useContext } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { SaveButton } from "./styled";
import clsx from "clsx";
import { updateProfile } from "../../services/updateProfile";
import { goToProfile } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { getProfile } from "../../services/getProfile";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "16px",
  },
}));

const EditProfileForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({});

  console.log("Este é o estado name:", data.name);

  const onSubmitForm = async () => {
    window.event.preventDefault();
    const result = await updateProfile(form);
    alert("Perfil atualizado com sucesso! :)");
    goToProfile(history);
  };

  const [form, onChange] = useForm({
    name: data.name,
    email: data.email,
    cpf: data.cpf,
  });

  useEffect(() => {
    (async () => {
      const result = await getProfile();
      result.status && setData(result.user);
      // console.log("Este é o result.user:", result.user);
      // console.log("Este é o result.user.name:", result.user.name);
    })();
  }, []);

  console.log("Este é o form.name impresso:", form.name);

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
