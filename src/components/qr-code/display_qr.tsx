import QRCode from "qrcode.react";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const DisplayQr = () => {
  const [qrValue, setQrValue] = useState(
    "ST_2216054E-65AB-4D22-B04F-522849296E0D"
  );
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const qrInterval = setInterval(() => {
      // Update the QR code value here
      setQrValue(
        // "https://spayapp.azurewebsites.net/index.html?time="
        qrValue + "?time=" + Date.now()
      );
      // Reset the countdown
      setCountdown(60);
    }, 60000); // Update every 60 seconds

    const countdownInterval = setInterval(() => {
      // Decrease the countdown every second
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(qrInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-72 h-auto bg-white rounded-xl text-center">
        <div className="my-5">
          <QRCode className="m-auto" value={qrValue} size={250} />
        </div>
        <div className="text-sm m-auto mb-5">
          QR làm mới sau: {countdown} giây
        </div>
      </div>
    </div>
  );
};

export default DisplayQr;
