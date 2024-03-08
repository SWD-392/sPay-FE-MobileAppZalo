import React from "react";
import { Page, Header } from "zmp-ui";
import UserCard from "../components/usercard/user-card";
import { useLocation } from "react-router-dom";

const UserPackage: React.FunctionComponent = () => {
  const location = useLocation();
  const userPromotion = location.state.userPromotion;
  console.log(userPromotion);

  return (
    <Page hideScrollbar className="bg-white">
      <div className="mt-20 mx-4">
        <Header title="Các gói khuyến mãi" />

        {userPromotion.map((userpackage) => (
          <UserCard key={userpackage.id} promotionCardData={userpackage} />
        ))}
      </div>
    </Page>
  );
};

export default UserPackage;
