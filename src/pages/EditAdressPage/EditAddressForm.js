import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { SaveButton } from "./styled";
import { getFullAdress } from "../../services/getFullAdress";
import { addAddress } from "../../services/addAddress";
import { goToProfile } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const EditAddressForm = () => {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const history = useHistory();
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

    await addAddress(body);
    alert("Endereço atualizado com sucesso! :)");
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
          fullWidth
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
          fullWidth
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
          fullWidth
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
          fullWidth
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
          fullWidth
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
          fullWidth
        />
        <SaveButton type={"submit"}>Salvar</SaveButton>
      </form>
    </div>
  );
};

export default EditAddressForm;
