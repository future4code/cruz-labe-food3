import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { SaveButton } from "./styled";
import useForm from "../../hooks/useForm";
import { getFullAdress } from "../../services/getFullAdress";
//import { addAdress } from "../../services/addAdress";

const EditAddressForm = () => {
  const [address, setAddress] = useState({});
  const [form, onChange, clear] = useForm({
    publicPlace: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
  });
  const body = {
    street: form.publicPlace,
    number: form.number,
    neighbourhood: form.district,
    city: form.city,
    state: form.state,
    complement: form.complement,
  };
  /* useEffect(() => {
    (async () => {
      const res = await addAdress(body);
      if (res.status) {
        console.log(res.status);
      } else {
        console.log(res.message);
      }
    })();
  }, []);
  console.log(address.city);
  console.log(addAdress);*/

  useEffect(() => {
    (async () => {
      const res = await getFullAdress();

      if (res.status) {
        setAddress(res.address);
        console.log(res.address);
      } else {
        console.log(res.message);
      }
    })();
  }, []);
  console.log(address.city);

  return (
    <div>
      <form>
        <TextField
          name={"publicPlace"}
          label={"Logradouro"}
          placeholder={"Rua / Av."}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          value={form.publicPlace}
          onChange={onChange}
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
          value={form.number}
          onChange={onChange}
          required
          fullWidth
        />

        <TextField
          label={"complemento"}
          placeholder={"Apto. / Bloco"}
          margin={"normal"}
          variant={"outlined"}
          type={"text"}
          value={form.complement}
          onChange={onChange}
          required
          fullWidth
        />

        <TextField
          name={"district"}
          label={"Bairro"}
          placeholder={"Bairro"}
          margin={"normal"}
          variant={"outlined"}
          value={form.district}
          onChange={onChange}
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
          value={address.city}
          onChange={onChange}
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
          value={form.state}
          onChange={onChange}
          required
          fullWidth
        />
        <SaveButton>Salvar</SaveButton>
      </form>
    </div>
  );
};

export default EditAddressForm;
