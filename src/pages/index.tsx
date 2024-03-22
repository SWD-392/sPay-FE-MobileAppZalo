import React, { Suspense, useEffect, useState } from "react";
import { Welcome } from "../components/homepage/welcome";
import { Button, Page, Swiper, useNavigate } from "zmp-ui";
import Card from "../components/payment/card-mini";
import UserCard from "../components/usercard/user-card";
import CardMini from "../components/payment/card-mini";
import { getPromotion } from "../service/pay-package";
import { getMembershipByUserKey } from "../service/";
import { useAuth } from "../hook/AuthContext";

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
      cardNo: string;
      cardName: string;
      description: string;
      promotionPackageKey: string;
      packageName: string;
      usaebleAmount: number;
      discountPercentage: number;
      price: number;
      numberDate: number;
      withdrawAllowed: boolean;
    }[];
  };

  type MembershipData = {
    no: number;
    membershipKey: string;
    userKey: string;
    cardName: string;
    cardTypeName: string;
    cardDescription: string;
    storeCateName: string;
    usaebleAmount: number;
    balance: number;
    withdrawAllowed: boolean;
    expiredDate: string;
    isDefaultMembership: boolean;
  };

  type ResponseData = {
    pageSize: number;
    pageIndex: number;
    totalCount: number;
    totalPages: number;
    items: MembershipData[];
  };
  type ApiResponse = {
    data: ResponseData;
  };
  const [packages, setPackages] = useState<PackageData | null>(null);
  const [promotionData, setPromotionData] = useState<ResponseData | null>(null);
  const userKey = localStorage.getItem("user");

  const token = localStorage.getItem("token");

  console.log(token);

  useEffect(() => {
    const fetchPromotion = async () => {
      const data = await getPromotion();
      if (data) {
        setPackages(data.data);
      }
    };

    fetchPromotion();
  }, []);

  useEffect(() => {
    if (userKey) {
      getMembershipByUserKey(userKey).then((data) => {
        if (data) {
          setPromotionData(data.data);
        }
      });
    }
  }, [userKey]);

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
              navigate("/promotion-package", {
                state: { packages: packages && packages.items },
              });
            }}
          >
            Xem tất cả
          </Button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Swiper>
            {packages &&
              packages.items.map((packageItem) => (
                <Swiper.Slide>
                  <CardMini key={packageItem.cardKey} data={packageItem} />
                </Swiper.Slide>
              ))}
          </Swiper>
        </Suspense>
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
                state: { userPromotion: promotionData && promotionData.items },
              });
            }}
          >
            Xem tất cả
          </Button>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Swiper>
            {promotionData &&
              promotionData.items.map((promotiondata) => (
                <Swiper.Slide>
                  <UserCard
                    key={promotiondata.membershipKey}
                    promotionCardData={promotiondata}
                  />
                </Swiper.Slide>
              ))}
          </Swiper>
        </Suspense>
      </div>
    </Page>
  );
};

export default HomePage;
