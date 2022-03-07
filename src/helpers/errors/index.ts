import { AxiosError } from 'axios';

export const errorHandler = (err: AxiosError) => {
  return String(err.response?.data?.message) || 'Algo errado aconteceu';
};

export const toastrError = (
  err: AxiosError,
  toastr: (title: string, message: string) => void
) => {
  toastr('Oops!', errorHandler(err));
};
