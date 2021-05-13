import axios from "axios";
import { baseUrl } from "../constants/urls";

export const login = async (body, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.post(`${baseUrl}/login`, body);

    const { token } = response.data;
    const { hasAddress } = response.data.user;

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
