import Card from "../components/payment/card-payment";
import PaymentDetail from "../components/payment/paydetail";
import React from "react";
import { Header, Page } from "zmp-ui";

const PaymentPage = () => {
  const date = new Date().toISOString().split("T")[0]; // current date in YYYY-MM-DD format
  const amount = 100000; // replace with actual amount
  return (
    <Page>
      <Header title="Thanh toán" />
      <PaymentDetail date={date} amount={amount} />
    </Page>
  );
};

export default PaymentPage;
