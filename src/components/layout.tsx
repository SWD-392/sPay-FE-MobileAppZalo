import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { Navigation } from "./navigation";

import { getSystemInfo } from "zmp-sdk";
import { ScrollRestoration } from "./scroll-restoration";
import { useHandlePayment } from "../hooks";
import HomePage from "../pages/promotionpackage";
import QrCode from "../pages/qr_code";
import QRScan from "../pages/scanqr_code";
import UserPage from "../pages/user";
import { Form } from "react-router-dom";
import PaymentPage from "../pages/pay";
import PaymentPageDetail from "../pages/payment";
import Paypackage from "../pages/paypackage";
import Home from "../pages";
import PromotionPackage from "../pages/promotionpackage";
import UserPackage from "../pages/user_promotion_package";

if (getSystemInfo().platform === "android") {
  const androidSafeTop = Math.round(
    (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
      window.devicePixelRatio
  );
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`
  );
}

export const Layout: FC = () => {
  useHandlePayment();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/user-package" element={<UserPackage />}></Route>

          <Route path="/qr_code" element={<QrCode />}></Route>
          <Route path="/qrcodescanner" element={<QRScan />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/payment-detail" element={<PaymentPageDetail />}></Route>
          <Route path="/pay-package" element={<Paypackage />}></Route>
          <Route
            path="/promotion-package"
            element={<PromotionPackage />}
          ></Route>
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
