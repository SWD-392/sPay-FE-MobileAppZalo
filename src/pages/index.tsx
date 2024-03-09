import React, { useEffect, useState } from "react";
import { Welcome } from "../components/homepage/welcome";
import { Button, Page, Swiper, useNavigate } from "zmp-ui";
import Card from "../components/payment/card-mini";
import UserCard from "../components/usercard/user-card";
import CardMini from "../components/payment/card-mini";
import { getPromotion } from "../service/pay-package";

const HomePage: React.FunctionComponent = () => {
  type PackageData = {
    pageSize: number;
    pageIndex: number;
    totalCount: number;
    totalPages: number;
    items: {
      no: number;
      cardKey: string;
      cardTypeKey: string;
      cardTypeName: string;
      cardName: string;
      number: string;
      description: string | null;
      moneyValue: number;
      discountPercentage: number;
      price: number;
      insDate: string;
      dateNumber: number;
      status: number;
    }[];
  };

  const [packages, setPackages] = useState<PackageData | null>(null);

  useEffect(() => {
    getPromotion().then((data) => {
      if (data) {
        setPackages(data.data);
      }
    });
  }, []);

  console.log(packages);

  // const packages = [
  //   {
  //     packageID: 1,
  //     packageName: "Gói cơ bản",
  //     packageDescription:
  //       "Gói cơ bản cho phép thanh toán nhanh chóng tại các nhà hàng ưa thích.",
  //     price: 100000,
  //     cardCategory: "Đồ ăn",
  //     expireIn: 2,
  //     totalReceive: 110000,
  //   },
  //   {
  //     packageID: 2,
  //     packageName: "Gói ăn uống",
  //     packageDescription:
  //       "Gói ăn uống cho phép thanh toán nhanh chóng các món ăn tại các quầy ăn uống ưa thích.",
  //     price: 100000,
  //     cardCategory: "Mua sắm",
  //     expireIn: 1,
  //     totalReceive: 110000,
  //   },
  //   {
  //     packageID: 3,
  //     packageName: "Gói mua sắm",
  //     packageDescription: "This is package 3",
  //     cardCategory: "Phụ kiện",
  //     price: 300000,
  //     expireIn: 3,
  //     totalReceive: 330000,
  //   },
  //   {
  //     packageID: 4,
  //     packageName: "Gói siêu vip",
  //     packageDescription: "This is package 4",
  //     price: 500000,
  //     cardCategory: "Phụ kiện",
  //     expireIn: 5,
  //     totalReceive: 550000,
  //   },
  //   {
  //     packageID: 5,
  //     packageName: "Gói siêu siêu vip",
  //     packageDescription: "This is package 5",
  //     price: 1000000,
  //     cardCategory: "Đồ ăn",

  //     expireIn: 10,
  //     totalReceive: 550000,
  //   },
  // ];

  const promotionData = [
    {
      id: 1,
      packageName: "Gói cơ bản ",
      totalMoney: 100000,
      cateShop: "Ăn uống",
    },
    {
      id: 2,
      packageName: "Package 2",
      totalMoney: 200,
      cateShop: "Category 2",
    },
    {
      id: 3,

      packageName: "Package 3",
      totalMoney: 300,
      cateShop: "Category 3",
    },
  ];

  const navigate = useNavigate();
  return (
    <Page className="page bg-white">
      <Welcome />

      <div className="mt-20">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Các gói khuyến mãi
          </h1>
          <Button
            variant="tertiary"
            onClick={() => {
              navigate("/promotion-package", { state: { packages: packages } });
            }}
          >
            Xem tất cả
          </Button>
        </div>

        <Swiper>
          {packages &&
            packages.items.map((packageItem) => (
              <Swiper.Slide>
                <CardMini key={packageItem.cardKey} data={packageItem} />
              </Swiper.Slide>
            ))}
        </Swiper>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Các gói của bạn
          </h1>
          <Button
            variant="tertiary"
            onClick={() => {
              navigate("/user-package", {
                state: { userPromotion: promotionData },
              });
            }}
          >
            Xem tất cả
          </Button>
        </div>
        <Swiper>
          {promotionData.map((promotiondata) => (
            <Swiper.Slide>
              {/* <Card key={packageItem.packageID} data={packageItem} /> */}
              <UserCard
                key={promotiondata.id}
                promotionCardData={promotiondata}
              />
            </Swiper.Slide>
          ))}
        </Swiper>
      </div>
    </Page>
  );
};

export default HomePage;
