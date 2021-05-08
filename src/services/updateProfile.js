import axios from "axios";
import { baseUrl } from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const updateProfile = async (body, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.put(`${baseUrl}/profile`, body, headerApi());

    const { user } = response.data;

    return {
      user,
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
