import axios from "axios";
import { handleError } from "../Helper/ErrorHandler";
import { USerProfileToken } from "../Models/User";

const api = "http://localhost:5227/api/";

export const loginApi = async (email: string, password: string) => {
  try {
    const data = await axios.post<USerProfileToken>(api + "account/login", {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
export const registerApi = async (
  email: string,
  userName: string,
  password: string
) => {
  try {
    const data = await axios.post<USerProfileToken>(api + "account/register", {
      email: email,
      username: userName,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const ValidateToken = async (token: string) => {
  try {
    const data = await axios.post<boolean>(api + "account/validatetoken", {
      token: token,
    });
    return data.data;
  } catch (error) {
    handleError(error);
    return false;
  }
};
