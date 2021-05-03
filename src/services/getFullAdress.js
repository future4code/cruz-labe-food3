import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const getFullAdress = async () => {
  try {
    const response = await axios.get(`${baseUrl}/address`, headerApi());

    const { address } = response.data;

    return {
      address,
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
