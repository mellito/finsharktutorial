import axios from "axios";
import { handleError } from "../Helper/ErrorHandler";
import {
  PortfolioDelete,
  PortfolioGet,
  PortfolioPost,
} from "../Models/Portfolio";

const api = "http://localhost:5227/api/portfolio";

export const portfolioAddAPI = async (symbol: string) => {
  try {
    const data = await axios.post<PortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<PortfolioDelete>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioGetAllAPI = async () => {
  try {
    const data = await axios.get<PortfolioGet[]>(api + `?symbol=${api}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
