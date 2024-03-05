import PaymentDetailCard from "../components/afterpayment/paymentdetail";
import React from "react";
import { Header, Page } from "zmp-ui";

const PaymentPageDetail = () => {
  const date = new Date().toISOString().split("T")[0]; // current date in YYYY-MM-DD format
  const amount = 100000; // replace with actual amount
  const packages = [
    {
      packageID: 1,
      packageName: "Gói cơ bản",
      price: 100000,
      cardCategory: "Đồ ăn",
      expireIn: 2,
    },
  ];
  return (
    <Page>
      <Header title="Chi tiết thanh toán" />
      <PaymentDetailCard date={date} amount={amount} data={packages} />
    </Page>
  );
};

export default PaymentPageDetail;
