import { atom } from "recoil";

export const userStore = atom({
  key: "user",
  default: JSON.parse(localStorage.getItem("user")) ?? {},
});

export const roomSelect = atom({
  key: "roomDetails",
  default: JSON.parse(localStorage.getItem("rooms-selected")) ?? {},
});

export const config=atom({
  key: "config",
  default: {}
})