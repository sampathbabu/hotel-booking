import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LOGIN_URL, REGISTER_URL } from "../apiurls";
import { config } from "../store";
import { CONFIG } from "../store/store.constant";
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
    setConfig((prev) => ({ ...prev, [CONFIG.LOADING]: true }));
    try{
      const response= await axios.post(src, data, config)
      setConfig((prev)=>({...prev, [CONFIG.LOADING]: false}))
      return response;
    }catch{
      setConfig((prev)=>({...prev, [CONFIG.LOADING]: false}))
    }
    
  };
  return handlePostCall;
};
