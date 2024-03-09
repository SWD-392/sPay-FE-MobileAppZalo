import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "zmp-ui";

interface PackageCardPayDetailProps {
  data: any;
}

const PackageCardPayDetail: React.FC<PackageCardPayDetailProps> = ({
  data,
}) => {
  return (
    <div className="mt-64 ">
      <div className="flex justify-center">
        <div className="w-3/4 bg-white rounded-lg p-5 shadow-lg">
          <div className="text-2xl font-bold text-center">
            {data.packageName}
          </div>
          <div className="flex justify-between mt-4">
            <p className="w-60">Mô tả:</p>
            <p className="text-right">{data.packageDescription}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="w-32">Thanh toán:</p>
            <p className="text-right">{data.price}đ</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="w-32">Tổng tiền dùng:</p>
            <p className="text-right">{data.totalReceive}đ</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="w-32">Hạn sử dụng:</p>
            <p className="text-right">{data.expireIn} ngày</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="w-32">Loại sản phẩm:</p>
            <p className="text-right">{data.cardCategory}</p>
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
