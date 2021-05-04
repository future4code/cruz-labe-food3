import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { SignUpButton } from "./styled";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "16px",
  },
}));

const SignUpForm = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  return (
    <div>
      <form>
        <TextField
          className={clsx(classes.margin, classes.textField)}
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          className={clsx(classes.margin, classes.textField)}
          label={"E-mail"}
          placeholder={"email@email.com"}
          margin={"normal"}
          variant={"outlined"}
          type={"email"}
          required
          fullWidth
        />

        <TextField
          className={clsx(classes.margin, classes.textField)}
          label={"CPF"}
          placeholder={"000.000.000-00"}
          margin={"normal"}
          variant={"outlined"}
          type={"number"}
          required
          fullWidth
        />

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Senha *</InputLabel>
          <OutlinedInput
            placeholder="Mínimo 6 caracteres"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            required
            onChange={handleChange("password")}
            endAdornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={handlePassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            labelWidth={60}
          />
        </FormControl>

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-confirmPassword">
            Confirmar *
          </InputLabel>
          <OutlinedInput
            placeholder="Confirme a senha anterior"
            type={values.showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            required
            onChange={handleChange("confirmPassword")}
            endAdornment={
              <IconButton
                aria-label="toggle confirmPassword visibility"
                onClick={handleConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showConfirmPassword ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            }
            labelWidth={85}
          />
        </FormControl>
        <SignUpButton>Criar</SignUpButton>
      </form>
    </div>
  );
};

export default SignUpForm;
