import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import {
  TextField,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormControl,
} from "@material-ui/core";
import { LoginButton } from "./styled";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { login } from "../../services/login";
import { goToAddAddressPage, goToHomePage } from "../../routes/coordinator";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "8px",
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const [form, onChange, clear] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = async () => {
    window.event.preventDefault();
    const result = await login(form);
    if (result.status) {
      localStorage.setItem("token", result.token);

      if (result.hasAddress) {
        goToHomePage(history);
      } else {
        alert("Para continuar, cadastre o seu endereço :)");
        goToAddAddressPage(history);
      }
    } else {
      alert(result.message);
    }
  };

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          placeholder={"email@email.com"}
          margin={"normal"}
          variant={"outlined"}
          type={"email"}
          required
          fullWidth
        />

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Senha*</InputLabel>
          <OutlinedInput
            name={"password"}
            placeholder="Mínimo 6 caracteres"
            type={values.showPassword ? "text" : "password"}
            value={(values.password, form.password)}
            fullWidth
            required
            onChange={(handleChange("password"), onChange)}
            endAdornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            labelWidth={55}
          />
        </FormControl>

        <LoginButton type={"submit"}>Entrar</LoginButton>
      </form>
    </div>
  );
};

export default LoginForm;
