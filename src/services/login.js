import axios from "axios";
import { baseUrl } from "../constants/urls";

export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);

    const { token } = response.data;
    const { hasAddress } = response.data.user;
    const { email } = response.data.user;

    return {
      token,
      hasAddress,
      email,
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
