import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userStore } from "../store";

const Logout = () => {
  const [user,setUser]=useRecoilState(userStore);
  const navigate = useNavigate();
  useEffect(() => {
    setUser({})
    localStorage.removeItem("user");
    navigate("/");
  }, []);
  return <div></div>;
};

export default Logout;
