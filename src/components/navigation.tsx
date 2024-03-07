import React, { useMemo, useState } from "react";
import { MenuItem } from "../types/menu";
import { BottomNavigation, Icon, useNavigate } from "zmp-ui";
import { useLocation } from "react-router-dom";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
  },
  "/qr_code": {
    label: "Quét mã",
    icon: <Icon icon="zi-qrline" />,
  },
  "/user": {
    label: "Cá nhân",
    icon: <Icon icon="zi-user" />,
  },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = [
  // "/qr_code",
  // "/qrcodescanner",
  "/aaa",
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("/");
  const navigate = useNavigate();
  const location = useLocation();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav) {
    return <></>;
  }
  return (
    <BottomNavigation
      id="footer"
      activeKey={activeTab}
      onChange={(key: TabKeys) => setActiveTab(key)}
      className="z-50"
    >
      {Object.keys(tabs).map((path: TabKeys) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
          onClick={() => navigate(path)}
        />
      ))}
    </BottomNavigation>
  );
};
