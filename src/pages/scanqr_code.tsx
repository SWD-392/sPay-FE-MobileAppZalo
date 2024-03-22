import React, { useEffect, useState } from "react";
import { Page, useNavigate, Header } from "zmp-ui";
import FooterQr from "../components/qr-code/footer_qr";
import { Html5QrcodeScanner } from "html5-qrcode";
import { getStore } from "../service";

const QRScan: React.FunctionComponent = () => {
  const [scanResult, setScanResult] = React.useState<string>("");
  const [store, setStore] = useState<any>(null);

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
    }
    function error(err: string) {
      console.warn(err);
    }
    return () => {
      scanner.clear();
    };
  }, []);

  useEffect(() => {
    const fetchStore = async () => {
      if (scanResult) {
        const result = await getStore(scanResult);
        console.log("data", result.data);
        if (result.data) {
          navigate("/payment-detail", { state: { result: result.data } });
        }
      }
    };

    fetchStore();
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
