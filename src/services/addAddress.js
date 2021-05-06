import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const addAddress = async (body) => {
  try {
    const response = await axios.put(`${baseUrl}/address`, body, headerApi());
    console.log(response);

    const { token } = response.data;
    const { hasAddress } = response.data.user;
    console.log("Endereço cadastrado com sucesso!");

    return {
      token,
      hasAddress,
      status: true,
    };
  } catch (error) {
    const { message } = error.response.data;

    return {
      message,
      status: false,
    };
  }
};
