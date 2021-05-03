import axios from "axios";
import { baseUrl } from "../constants/urls";

export const signUp = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);

    const { token } = response.data;
    const { hasAddress } = response.data.user;

    return {
      token,
      hasAddress,
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
