import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const addAddress = async (body, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.put(`${baseUrl}/address`, body, headerApi());
    const { token } = response.data;
    const { hasAddress } = response.data.user;
    console.log("Endereço cadastrado com sucesso!");

    return {
      token,
      hasAddress,
      status: true,
    };
  } catch (error) {
    setIsLoading(false);
    const { message } = error.response.data;
    return {
      message,
      status: false,
    };
  }
};
