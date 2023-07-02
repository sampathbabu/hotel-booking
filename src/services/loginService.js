import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LOGIN_URL, REGISTER_URL } from "../apiurls";
import { config } from "../store";
const postCall = async ({ url, payload, headers }) => {
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

export const handleRegister = ({
  email,
  password,
  mobile,
  firstName,
  lastName,
}) => {
  return postCall({
    url: REGISTER_URL,
    payload: { email, password, mobile, firstName, lastName },
  });
};

export const usePostCall = () => {
  const setConfig = useSetRecoilState(config);
  const handlePostCall = async(src, data, config) => {
    setConfig((prev) => ({ ...prev, loading: true }));
    const response= await axios.post(src, data, config)
    setConfig((prev)=>({...prev, loading: false}))
    return response;
  };
  return handlePostCall;
};
