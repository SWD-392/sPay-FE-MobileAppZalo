import React, { useState } from "react";

import { BottomNavigation, Icon, Page, useNavigate } from "zmp-ui";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const navigate = useNavigate();
  const { title } = props;
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleProfileClick = () => {
    navigate("/user");
  };
  const handleQrcodeClick = () => {
    navigate("/qr_code");
  };
  return (
    <Page className="page">
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="home"
          label="Trang chủ"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
          //   onClick={handleHomeClick}
          onClick={() => {
            navigate("/", {
              replace: true,
              animate: true,
              direction: "backward",
            });
          }}
        />
        <BottomNavigation.Item
          key="qrcode"
          label="Quét mã"
          icon={<Icon icon="zi-qrline" />}
          //   onClick={handleHomeClick}
          onClick={() => {
            navigate("/qr_code", {});
          }}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
          onClick={handleProfileClick}
        />
      </BottomNavigation>
    </Page>
  );
};

export default BottomNavigationPage;
