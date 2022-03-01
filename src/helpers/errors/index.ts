import { AxiosError } from "axios";

export const errorHandler = (err: AxiosError) => {
  return String(err.response?.data?.message) || "Algo errado aconteceu";
};
