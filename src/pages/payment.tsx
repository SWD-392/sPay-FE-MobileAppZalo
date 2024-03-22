import PaymentDetailCard from "../components/afterpayment/paymentdetail";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getStore } from "../service";
import { Header, Page } from "zmp-ui";

const PaymentPageDetail = () => {
  const location = useLocation();
  const store = location.state?.result;
  // this scanResult will call the api and get the id for the shop and show the detail of the payment
  return (
    <Page className="bg-white">
      <Header title="Chi tiết thanh toán" />

      <PaymentDetailCard data={store} />
    </Page>
  );
};

export default PaymentPageDetail;
