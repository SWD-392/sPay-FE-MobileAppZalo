import React from "react";
import { Page, useNavigate, Header } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import FooterQr from "../components/qr-code/footer_qr";

const QRScan: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="page bg-blue-900 min-h-screen flex flex-col justify-between">
      <Header title="Quét mã thanh toán" />
      <div>scanQR</div>
      <FooterQr />
    </Page>
  );
};

export default QRScan;
