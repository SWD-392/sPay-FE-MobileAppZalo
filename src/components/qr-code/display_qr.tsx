import React from 'react';

import { useNavigate } from 'react-router-dom';
 

const DisplayQr = () => {
 
  return (
    <div className="flex items-center justify-center h-screen">
  <div className="w-72 h-auto bg-white rounded-xl text-center">
    <img src="https://th.bing.com/th/id/OIP.b51Dv6nVMjWntrwxD7VEiwHaHa?rs=1&pid=ImgDetMain" alt="QR code" className="w-[250px] h-[270px] rounded-xl mx-auto"></img>
    <p className="front-bold text-[17px] w-[220px] mt-4 mb-5">Tự động cập nhật sau:</p>
  </div>
</div>




  );
};

export default DisplayQr;