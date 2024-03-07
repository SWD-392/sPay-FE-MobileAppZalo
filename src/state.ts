import { atom, selector, selectorFamily } from "recoil";
import {
  authorize,
  getLocation,
  getPhoneNumber,
  getSetting,
  getUserInfo,
} from "zmp-sdk";
import logo from "static/logo.png";

export const authorizedState = selector({
  key: "authorized",
  get: async () => {
    const { authSetting } = await getSetting({});
    if (!authSetting["scope.userInfo"]) {
      await authorize({ scopes: [] });
    }
  },
});

export const userState = selector({
  key: "user",
  get: async ({ get }) => {
    get(authorizedState);
    const { userInfo } = await getUserInfo({ avatarType: "small" });
    return userInfo;
  },
});


export const requestLocationTriesState = atom({
  key: "requestLocationTries",
  default: 0,
});

export const requestPhoneTriesState = atom({
  key: "requestPhoneTries",
  default: 0,
});

export const locationState = selector<
  { latitude: string; longitude: string } | false
>({
  key: "location",
  get: async ({ get }) => {
    const requested = get(requestLocationTriesState);
    if (requested) {
      const { latitude, longitude, token } = await getLocation({
        fail: console.warn,
      });
      if (latitude && longitude) {
        return { latitude, longitude };
      }
      if (token) {
        console.warn(
          "Sử dụng token này để truy xuất vị trí chính xác của người dùng",
          token,
        );
        console.warn(
          "Chi tiết tham khảo: ",
          "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app",
        );
        console.warn("Giả lập vị trí mặc định: VNG Campus");
        return {
          latitude: "10.7287",
          longitude: "106.7317",
        };
      }
    }
    return false;
  },
});

export const phoneState = selector<string | boolean>({
  key: "phone",
  get: async ({ get }) => {
    const requested = get(requestPhoneTriesState);
    if (requested) {
      const { number, token } = await getPhoneNumber({ fail: console.warn });
      if (number) {
        return number;
      }
      console.warn(
        "Sử dụng token này để truy xuất số điện thoại của người dùng",
        token,
      );
      console.warn(
        "Chi tiết tham khảo: ",
        "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app",
      );
      console.warn("Giả lập số điện thoại mặc định: 0337076898");
      return "0337076898";
    }
    return false;
  },
});