import React, { useState, useEffect } from "react";
import { TextField, CircularProgress, makeStyles } from "@material-ui/core";
import { SaveButton } from "./styled";
import { getFullAdress } from "../../services/getFullAdress";
import { addAddress } from "../../services/addAddress";
import { goToProfile } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "0 auto",
    marginTop: "16px",
  },
}));

const EditAddressForm = () => {
  const history = useHistory();
  const classes = useStyles();

  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getFullAdress();

      if (res.status) {
        setStreet(res.address.street);
        setNumber(res.address.number);
        setComplement(res.address.complement);
        setCity(res.address.city);
        setNeighbourhood(res.address.neighbourhood);
        setState(res.address.state);
      } else {
        console.log(res.message);
      }
    })();
  }, []);

  const onChangeStreet = (event) => {
    setStreet(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const onChangeComplement = (event) => {
    setComplement(event.target.value);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };
  const onChangeNeighbourhood = (event) => {
    setNeighbourhood(event.target.value);
  };
  const onChangeState = (event) => {
    setState(event.target.value);
  };

  const onSubmitForm = async () => {
    window.event.preventDefault();

    const body = {
      street,
      number,
      complement,
      neighbourhood,
      city,
      state,
    };

    await addAddress(body, setIsLoading);
    goToProfile(history);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"publicPlace"}
          label={"Logradouro"}
          placeholder={"Rua / Av."}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          value={street}
          onChange={onChangeStreet}
          required
          className={clsx(classes.margin, classes.textField)}
        />

        <TextField
          name={"number"}
          label={"Número"}
          placeholder={"Número"}
          margin={"normal"}
          variant={"outlined"}
          type={"number"}
          value={number}
          onChange={onChangeNumber}
          required
          className={clsx(classes.margin, classes.textField)}
        />

        <TextField
          name={"complement"}
          label={"Complemento"}
          placeholder={"Apto. / Bloco"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          value={complement}
          onChange={onChangeComplement}
          className={clsx(classes.margin, classes.textField)}
        />

        <TextField
          name={"district"}
          label={"Bairro"}
          placeholder={"Bairro"}
          margin={"normal"}
          variant={"outlined"}
          value={neighbourhood}
          onChange={onChangeNeighbourhood}
          type={"text"}
          required
          className={clsx(classes.margin, classes.textField)}
        />

        <TextField
          name={"city"}
          label={"Cidade"}
          placeholder={"Cidade"}
          margin={"normal"}
          variant={"outlined"}
          value={city}
          onChange={onChangeCity}
          type={"text"}
          required
          className={clsx(classes.margin, classes.textField)}
        />

        <TextField
          name={"state"}
          label={"Estado"}
          placeholder={"Estado"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          value={state}
          onChange={onChangeState}
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

export default EditAddressForm;
