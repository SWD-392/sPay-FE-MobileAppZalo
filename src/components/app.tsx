import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, Box } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import Form from "../pages/form";
import User from "../pages/user";
import QrCode from "../pages/qr_code";
import BottomNavigationPage from "./homepage/bottomnavigation";
import PaymentPage from "../pages/pay";
import PaymentPageDetail from "../pages/afterpay";
import QRScan from "../pages/scanqr_code";
import Paypackage from "../pages/paypackage";
import { Navigation } from "./navigation";
import { Layout } from "./layout";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <Box className="flex-1 flex flex-col overflow-hidden">
            <ZMPRouter>
              <Layout />
            </ZMPRouter>
          </Box>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
