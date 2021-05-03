import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const getActiveOrder = async () => {
  try {
    const response = await axios.get(`${baseUrl}/active-order`, headerApi());
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
