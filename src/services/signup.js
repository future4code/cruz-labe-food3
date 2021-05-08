import axios from "axios";
import { baseUrl } from "../constants/urls";

export const signUp = async (body, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.post(`${baseUrl}/signup`, body);

    const { token } = response.data;
    const { hasAddress } = response.data.user;
    alert("cadastro realizado");

    return {
      token,
      hasAddress,
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
