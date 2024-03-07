import React from "react";
import { List, Page, Icon, BottomNavigation, Header, Box } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import Card from "../components/homepage/card";
import BottomNavigationPage from "../components/homepage/bottomnavigation";
import { Welcome } from "../components/homepage/welcome";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);

  const packages = [
    {
      packageID: 1,
      packageName: "Gói cơ bản",
      packageDescription:
        "Gói cơ bản cho phép thanh toán nhanh chóng tại các nhà hàng ưa thích.",
      price: 100000,
      cardCategory: "Đồ ăn",
      expireIn: 2,
      totalReceive: 110000,
    },
    {
      packageID: 2,
      packageName: "Gói ăn uống",
      packageDescription:
        "Gói ăn uống cho phép thanh toán nhanh chóng các món ăn tại các quầy ăn uống ưa thích.",
      price: 100000,
      cardCategory: "Mua sắm",
      expireIn: 1,
      totalReceive: 110000,
    },
    {
      packageID: 3,
      packageName: "Gói mua sắm",
      packageDescription: "This is package 3",
      cardCategory: "Phụ kiện",
      price: 300000,
      expireIn: 3,
      totalReceive: 330000,
    },
    {
      packageID: 4,
      packageName: "Gói siêu vip",
      packageDescription: "This is package 4",
      price: 500000,
      cardCategory: "Phụ kiện",
      expireIn: 5,
      totalReceive: 550000,
    },
    {
      packageID: 5,
      packageName: "Gói siêu siêu vip",
      packageDescription: "This is package 5",
      price: 1000000,
      cardCategory: "Đồ ăn",

      expireIn: 10,
      totalReceive: 550000,
    },
  ];

  return (
    <Page hideScrollbar className="bg-white">
      <Welcome />
      <div className="mt-20 mx-4">
        <h1 className="mt-10 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Các gói khuyến mãi
        </h1>
        {packages.map((packageItem) => (
          <Card key={packageItem.packageID} data={packageItem} />
        ))}
      </div>
    </Page>
  );
};

export default HomePage;
