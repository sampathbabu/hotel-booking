import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from "../apiurls";
const postCall = async({ url, payload, headers }) => {
  return axios
    .post(
      url,
      {
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      }
    )
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};
export const handleLogin = async ({ email, password }) => {
  return postCall({ url: LOGIN_URL, payload: { email, password } });
};

export const handleRegister = ({ email, password, mobile }) => {
  return postCall({ url: REGISTER_URL, payload: { email, password, mobile } });
};
