import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "zmp-ui";

interface PackageCardPayDetailProps {
  data: any;
}

const PackageCardPayDetail: React.FC<PackageCardPayDetailProps> = ({}) => {
  const location = useLocation();
  let data = location.state?.data;

  if (!data) {
    const storedData = sessionStorage.getItem("data");
    if (storedData) {
      data = JSON.parse(storedData);
    }
  }

  return (
    <div className="mt-64 ">
      <div className="flex justify-center">
        <div className="w-3/4 bg-white rounded-lg p-5 shadow-lg">
          <div className="text-2xl font-bold text-center">Gói cơ bản</div>
          <div className="text-center text-gray-500 mt-3">
            {data.packageDescription}
          </div>
          <div className="text-center text-gray-500 mt-3">
            Số tiền phải thanh toán: {data.price}đ
          </div>
          <div className="text-center text-gray-500 mt-3">
            Số tiền nhận được: {data.totalReceive}đ
          </div>
          <div className="text-center text-gray-500 mt-3">
            Hạn sử dụng: {data.expireIn} ngày
          </div>

          <div className="text-center text-gray-500 mt-3">
            Loại sản phẩm: {data.cardCategory}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button className="bg-blue-500 text-white p-2 rounded-lg ">
          Thanh toán
        </Button>
      </div>
    </div>
  );
};

export default PackageCardPayDetail;
