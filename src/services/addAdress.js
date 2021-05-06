import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const addAdress = async (body) => {
  try {
    const response = axios.put(`${baseUrl}/address`, body, headerApi());
    const { token } = response.data;
    const { hasAddress } = response.data.user;

    return {
      token,
      hasAddress,
      status: true,
    };
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);

    return {
      message,
      status: false,
    };
  }
};
