import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCodeScanner from './qrcodescanner';
const FooterQr = () => {
  const navigate = useNavigate();
  const handleNavigateToHomePage = () => {
    navigate("/qr_code");
  };
  const handleNavigateScanqrcode = () => {
    navigate("/qrcodescanner");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-center p-8">
      <button
        className="bg-blue-500 text-white py-3 px-6 rounded"
        onClick={handleNavigateToHomePage} >
        Mã Thanh Toán
      </button>
      <button
        onClick={handleNavigateScanqrcode}
        className="bg-gray-500 text-white py-3 px-6 rounded ml-4">
        Quét Mã QR
      </button>
      
    </div>
  );
};

export default FooterQr;