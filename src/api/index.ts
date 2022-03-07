// External
import axios from 'axios';

const prod = window.location.hostname !== 'localhost';
const baseURL = prod
  ? String(import.meta.env.VITE_BLOG_API)
  : 'http://localhost:4000';

const Axios = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const request = {
  get: async (path: string) => {
    return Axios.get(path)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
  post: async (path: string, body: object) => {
    return Axios.post(path, body)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
  delete: async (path: string) => {
    return Axios.delete(path)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
  patch: async (path: string, body = {}) => {
    return Axios.patch(path, body)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
  put: async (path: string, body = {}) => {
    return Axios.put(path, body)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
};
