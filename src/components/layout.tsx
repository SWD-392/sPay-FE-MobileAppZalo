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
import PrivateRoute from "../route/PrivateRoute";
import LoginPage from "../pages/login";
import { useAuth } from "../hook/AuthContext";
import { Navigate } from "react-router-dom";

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
const ProtectedComponent: React.FC<{ component: React.ReactElement }> = ({
  component,
}) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? component : <Navigate to="/login" replace />;
};
export const Layout: FC = () => {
  useHandlePayment();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={<ProtectedComponent component={<Home />} />}
          />
          <Route
            path="/user-package"
            element={<ProtectedComponent component={<UserPackage />} />}
          />
          <Route
            path="/qr_code"
            element={<ProtectedComponent component={<QrCode />} />}
          />
          <Route
            path="/qrcodescanner"
            element={<ProtectedComponent component={<QRScan />} />}
          />
          <Route
            path="/user"
            element={<ProtectedComponent component={<UserPage />} />}
          />
          <Route
            path="/form"
            element={<ProtectedComponent component={<Form />} />}
          />
          <Route
            path="/payment"
            element={<ProtectedComponent component={<PaymentPage />} />}
          />
          <Route
            path="/payment-detail"
            element={<ProtectedComponent component={<PaymentPageDetail />} />}
          />
          <Route
            path="/pay-package"
            element={<ProtectedComponent component={<Paypackage />} />}
          />
          <Route
            path="/promotion-package"
            element={<ProtectedComponent component={<PromotionPackage />} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
