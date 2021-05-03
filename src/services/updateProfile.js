import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const updateProfile = async (body) => {
  try {
    const response = await axios.put(`${baseUrl}/profile`, body, headerApi());

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
