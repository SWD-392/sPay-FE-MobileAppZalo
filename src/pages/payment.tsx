import PaymentDetailCard from "../components/afterpayment/paymentdetail";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getStore } from "../service";
import { Header, Page } from "zmp-ui";

const PaymentPageDetail = () => {
  const location = useLocation();
  const [store, setStore] = useState<any>(null);
  const scanResult = location.state?.result;
  // this scanResult will call the api and get the id for the shop and show the detail of the payment

  console.log("useEffect hook called"); // Add this line
  console.log("scanResult:", scanResult);

  useEffect(() => {
    if (scanResult) {
      console.log("getStore function will be called");
      // call the api and get the detail of the payment
      getStore(scanResult).then((data) => setStore(data.data));
    }
  }, [scanResult]);

  console.log(store);

  const date = new Date().toISOString().split("T")[0]; // current date in YYYY-MM-DD format
  const amount = 100000; // replace with actual amount
  const promotionData = [
    {
      packageName: "Package 1",
      totalMoney: 100,
      cateShop: "Category 1",
    },
    {
      packageName: "Package 2",
      totalMoney: 200,
      cateShop: "Category 2",
    },
    {
      packageName: "Package 3",
      totalMoney: 300,
      cateShop: "Category 3",
    },
  ];
  return (
    <Page className="bg-white">
      <Header title="Chi tiết thanh toán" />

      <PaymentDetailCard data={store} promotionCardData={promotionData} />
    </Page>
  );
};

export default PaymentPageDetail;
