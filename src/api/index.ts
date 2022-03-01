import axios from "axios";
const prod = window.location.hostname !== "localhost";
const baseURL = prod ? process.env.REACT_APP_BLOG_API : "http://localhost:4000";

const Axios = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
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
  post: async (path: string, body: {}) => {
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
  put: async (path: string, data = undefined) => {
    return Axios.put(path, data)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
};
