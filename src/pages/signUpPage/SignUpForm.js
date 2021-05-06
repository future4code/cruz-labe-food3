import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { SignUpButton } from "./styled";
import {
  TextField,
  IconButton,
  FormHelperText,
  makeStyles,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { signUp } from "../../services/signup";
import { goToAddAddressPage } from "../../routes/coordinator";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "16px",
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [isValidPassword, setIsValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
    error: false,
  });

  const onChangeConfirmPassword = (e) => {
    if (form.password !== e.target.value) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }

    setConfirmPassword(e.target.value);
    console.log(e.target.value);
  };

  const onSubmitForm = async () => {
    window.event.preventDefault();

    if (form.password === confirmPassword) {
      setIsValidPassword(false);
      const result = await signUp(form);
      if (result.status) {
        localStorage.setItem("token", result.token);
        setConfirmPassword("");
        clear();
        history.push("/addAddress");
      } else {
        alert(result.message);
      }
    } else {
      setIsValidPassword(true);
    }
  };

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
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          // inputProps={{ pattern: "[a-z]" }}
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
          name={"email"}
          value={form.email}
          onChange={onChange}
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
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          pattern={/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/}
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
            id="password"
            name={"password"}
            placeholder="Mínimo 6 caracteres"
            type={values.showPassword ? "text" : "password"}
            value={(values.password, form.password)}
            required
            onChange={(handleChange("password"), onChange)}
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
          error={isValidPassword}
        >
          <InputLabel htmlFor="outlined-adornment-confirmPassword">
            Confirmar *
          </InputLabel>
          <OutlinedInput
            id="confirmPassword"
            name={"confirm_password"}
            placeholder="Confirme a senha anterior"
            type={values.showConfirmPassword ? "text" : "password"}
            value={(values.confirmPassword, confirmPassword)}
            required
            onChange={
              (handleChange("confirmPassword"), onChangeConfirmPassword)
            }
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
          <FormHelperText>
            {isValidPassword && "Deve ser a mesma que a anterior."}
          </FormHelperText>
        </FormControl>

        <SignUpButton type={"submit"}>Criar</SignUpButton>
      </form>
    </div>
  );
};

export default SignUpForm;
