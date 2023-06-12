import { atom } from "recoil";

export const userStore = atom({
  key: "user",
  default: JSON.parse(localStorage.getItem("user"))??{}
});
