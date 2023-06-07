import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../store";

const Logout = () => {
  const { setStore } = useContext(Store);
  const navigate = useNavigate();
  useEffect(() => {
    setStore((prev) => ({ ...prev, user: {} }));
    localStorage.removeItem("user");
    navigate("/");
  }, []);
  return <div></div>;
};

export default Logout;
