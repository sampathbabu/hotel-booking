import { createContext, useEffect, useState } from "react";

const Store = createContext({});

export default Store;

export const useStore = () => {
  const [store, setStore] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setStore({ user: localStorage.getItem("user") });
    }
  }, []);
  return { store, setStore };
};
