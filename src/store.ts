import { atom } from "recoil";

export const buttonState = atom({
  key: "buttonState",
  default: { isShowQRClick: true, isScanQRClick: false },
});
