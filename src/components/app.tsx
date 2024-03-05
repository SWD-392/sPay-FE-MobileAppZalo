import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import Form from "../pages/form";
import User from "../pages/user";
import QrCode from "../pages/qr_code";
import BottomNavigationPage from "./homepage/bottomnavigation";
import PaymentPage from "../pages/pay";
import PaymentPageDetail from "../pages/afterpay";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage />}></Route>

              <Route path="/qr_code" element={<QrCode></QrCode>}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/payment" element={<PaymentPage />}></Route>
              <Route
                path="/payment-detail"
                element={<PaymentPageDetail />}
              ></Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
