import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const ordersHistory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/orders/history`, headerApi());

    const { data } = response;
    console.log(data);

    return {
      data,
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
