import React from "react";
import { List, Page, Icon, useNavigate, Header } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import FooterQr from "../components/qr-code/footer_qr";
import DisplayQr from "../components/qr-code/display_qr";

const QrCode: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="page bg-blue-900 min-h-screen flex flex-col justify-between">
      <Header className="sticky" showBackIcon={false} title="Mã Thanh Toán" />
      <DisplayQr />
      <FooterQr />
    </Page>
  );
};

export default QrCode;
