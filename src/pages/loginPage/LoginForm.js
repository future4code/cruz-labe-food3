import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import {
  TextField,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import { LoginButton } from "./styled";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { login } from "../../services/login";
import { goToAddAddressPage, goToHomePage } from "../../routes/coordinator";
import { useToast } from "@chakra-ui/react";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "8px",
  },
}));

const LoginForm = () => {
  const toast = useToast();

  const history = useHistory();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const [form, onChange] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = async () => {
    window.event.preventDefault();
    const result = await login(form, setIsLoading);
    if (result.status) {
      localStorage.setItem("token", result.token);

      if (result.hasAddress) {
        goToHomePage(history);
      } else {
        toast({
          title: "Precisamos de mais informações suas",
          description: "Cadastre o seu endereço para poder continuar!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });

        goToAddAddressPage(history);
      }
    } else {
      toast({
        title: "Algo deu errado",
        description: `${result.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
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

        <LoginButton type={"submit"}>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Entrar</>
          )}
        </LoginButton>
      </form>
    </div>
  );
};

export default LoginForm;
