import React from "react";
import { List, Page, Icon, BottomNavigation, Header, Box } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import Card from "../components/homepage/card";
import BottomNavigationPage from "../components/homepage/bottomnavigation";
import { useLocation } from "react-router-dom";

const PromotionPackage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const location = useLocation();
  const packages = location.state.packages;

  return (
    <Page hideScrollbar className="bg-white">
      <div className="mt-20 mx-4 mb-20">
        <Header title="Các gói khuyến mãi" />

        {packages.map((packageItem) => (
          <Card key={packageItem.packageID} data={packageItem} />
        ))}
      </div>
    </Page>
  );
};

export default PromotionPackage;
