import React from "react";
import PackageCardPayDetail from "../components/card/packageCardPayDetail";

import { Header, Page } from "zmp-ui";
import { useLocation } from "react-router-dom";

const Paypackage = () => {
  const location = useLocation();
  const data = location.state.packages;
  return (
    <Page className="flex bg-white flex-col">
      <Header showBackIcon title="Thanh toán gói" />
      <PackageCardPayDetail data={data} />
    </Page>
  );
};

export default Paypackage;
