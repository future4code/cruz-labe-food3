import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const placeOrder = async (idRest, body, setIsLoading) => {
  try {
    setIsLoading(true);
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
    setIsLoading(false);
    const { message } = error.response.data;
    return {
      message,
      status: false,
    };
  }
};
