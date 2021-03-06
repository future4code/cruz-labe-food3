import React, { useState, useEffect } from "react";
import { TextField, makeStyles, CircularProgress } from "@material-ui/core";
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
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const onSubmitForm = async () => {
    window.event.preventDefault();
    const body = {
      name,
      email,
      cpf,
    };

    await updateProfile(body, setIsLoading);
    goToProfile(history);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeCpf = (e) => {
    setCpf(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const result = await getProfile();
      if (result.status) {
        setName(result.user.name);
        setEmail(result.user.email);
        setCpf(result.user.cpf);
      }
    })();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={name}
          onChange={onChangeName}
          label={"Nome"}
          placeholder={"Nome completo"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          className={clsx(classes.margin, classes.textField)}
        />

        <TextField
          name={"email"}
          value={email}
          onChange={onChangeEmail}
          label={"E-mail"}
          placeholder={"E-mail"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          className={clsx(classes.margin, classes.textField)}
        />

        <TextField
          name={"cpf"}
          value={cpf}
          onChange={onChangeCpf}
          label={"CPF"}
          placeholder={"CPF"}
          margin={"normal"}
          variant={"outlined"}
          type={"number"}
          required
          className={clsx(classes.margin, classes.textField)}
        />
        <SaveButton type={"submit"}>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Salvar</>
          )}
        </SaveButton>
      </form>
    </div>
  );
};

export default EditProfileForm;
