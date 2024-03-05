import React from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import HeaderQr from "../components/qr-code/header_qr";
import FooterQr from "../components/qr-code/footer_qr";
import DisplayQr from "../components/qr-code/display_qr";



const QrCode: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="page bg-blue-900 min-h-screen flex flex-col justify-between">
    <HeaderQr/>
    <DisplayQr/>
    <FooterQr/>
    </Page>
  );
};

export default QrCode;