import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const getRestaurants = async () => {
  try {
    const response = await axios.get(`${baseUrl}/restaurants`, headerApi());

    const { restaurants } = response.data;

    return {
      restaurants,
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
