import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRScan from "./qr-scanner";
import { buttonState } from "../../store";
import { useRecoilState } from "recoil";
const FooterQr = () => {
  const navigate = useNavigate();
  const [button, setButton] = useRecoilState(buttonState);

  const handleNavigateToHomePage = () => {
    navigate("/qr_code");
    setButton({ ...button, isShowQRClick: true });
    setButton({ ...button, isScanQRClick: false });
  };
  const handleNavigateScanqrcode = () => {
    navigate("/qrcodescanner");
    setButton({ ...button, isScanQRClick: true });
    setButton({ ...button, isShowQRClick: false });
  };

  return (
    <div className="fixed bottom-10 left-0 right-0 bg-white flex justify-center p-8">
      <button
        className={`py-3 px-6 rounded ${
          button.isShowQRClick ? "bg-green-500" : "bg-gray-500"
        } text-white`}
        onClick={handleNavigateToHomePage}
      >
        Mã Thanh Toán
      </button>
      <button
        onClick={handleNavigateScanqrcode}
        className={`py-3 px-6 rounded ml-4 ${
          button.isScanQRClick ? "bg-green-500" : "bg-gray-500"
        } text-white`}
      >
        Quét Mã QR
      </button>
    </div>
  );
};

export default FooterQr;
