import React from "react";
import { List, Page, Icon, BottomNavigation, Header } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import Card from "../components/homepage/card";
import BottomNavigationPage from "../components/homepage/bottomnavigation";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);

  const packages = [
    {
      packageID: 1,
      packageName: "Gói cơ bản",
      packageDescription: "This is package 1",
      price: 100000,
      cardCategory: "Đồ ăn",
      expireIn: 2,
    },
    {
      packageID: 2,
      packageName: "Gói ăn uống",
      packageDescription: "This is package 2",
      price: 100000,
      cardCategory: "Mua sắm",
      expireIn: 1,
    },
    {
      packageID: 3,
      packageName: "Gói mua sắm",
      packageDescription: "This is package 3",
      cardCategory: "Phụ kiện",
      price: 300000,
      expireIn: 3,
    },
    {
      packageID: 4,
      packageName: "Gói siêu vip",
      packageDescription: "This is package 4",
      price: 500000,
      cardCategory: "Phụ kiện",
      expireIn: 5,
    },
    {
      packageID: 5,
      packageName: "Gói siêu siêu vip",
      packageDescription: "This is package 5",
      price: 1000000,
      cardCategory: "Đồ ăn",

      expireIn: 10,
    },
  ];

  return (
    <Page className="page">
      <Header
        showBackIcon={false}
        title="Các gói hiện có"
        backgroundColor="#1843EF"
        textColor="white"
      />
      {packages.map((packageItem) => (
        <Card key={packageItem.packageID} data={packageItem} />
      ))}
      <BottomNavigationPage />
    </Page>
  );
};

export default HomePage;
