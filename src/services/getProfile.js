import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "../services/config/headerApi";

export const getProfile = async () => {
  try {
    const response = await axios.get(`${baseUrl}/profile`, headerApi());

    const { user } = response.data;

    return {
      user,
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
