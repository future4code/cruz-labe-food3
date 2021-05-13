import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const getRestaurantDetail = async (idRest) => {
  try {
    const response = await axios.get(
      `${baseUrl}/restaurants/${idRest}`,
      headerApi()
    );

    const { restaurant } = response.data;

    return {
      restaurant,
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
