import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const placeOrder = async (idRest, body) => {
  try {
    const response = await axios.post(
      `${baseUrl}/restaurants/${idRest}/order`,
      body,
      headerApi()
    );

    const { order } = response.data;

    return {
      order,
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
