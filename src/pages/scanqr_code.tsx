import React, { useEffect } from "react";
import { Page, useNavigate, Header } from "zmp-ui";
import FooterQr from "../components/qr-code/footer_qr";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScan: React.FunctionComponent = () => {
  const [scanResult, setScanResult] = React.useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      /* verbose= */ false
    );

    scanner.render(success, error);

    function success(result: string) {
      scanner.clear();
      setScanResult(result);
      console.log(result);
    }
    function error(err: string) {
      console.warn(err);
    }
    return () => {
      scanner.clear();
    };
  }, []);

  useEffect(() => {
    if (scanResult) {
      console.log(scanResult);

      navigate("/payment-detail", { state: { result: scanResult } });
    }
  }, [scanResult]);

  return (
    <Page className="page">
      <Header
        showBackIcon={false}
        title="Quét mã thanh toán"
        className="sticky"
      />
      {scanResult ? (
        <div>
          Success: <p>{scanResult}</p>
        </div>
      ) : (
        <div className=" h-full text-center">
          <div id="qr-reader" className="text-center mt-48"></div>
        </div>
      )}

      <FooterQr />
    </Page>
  );
};

export default QRScan;
