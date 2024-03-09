import React from "react";
import { Button, useNavigate } from "zmp-ui";
// Import your SVG or PNG logo here

interface PackageData {
  no: number;
  cardKey: string;
  cardTypeKey: string;
  cardTypeName: string;
  cardName: string;
  number: string;
  description: string | null;
  moneyValue: number;
  discountPercentage: number;
  price: number;
  insDate: string;
  dateNumber: number;
  status: number;
}

interface CardProps {
  data: PackageData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <div className="block max-w-sm w-96 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.cardName}
          </h5>
          <div className="flex justify-between">
            <p className="w-60">Mô tả:</p>
            <p className="text-right">{data.description}</p>
          </div>
          <div className="flex justify-between">
            <p className="w-32">Giá gói:</p>
            <p> {data.price}đ</p>
          </div>
          <div className="flex justify-between">
            <p>Số tiền nhận được: </p>
            <p>{data.moneyValue}đ</p>
          </div>
          <div className="flex justify-between">
            <p>Khuyễn mãi: </p>
            <p>{data.discountPercentage}đ</p>
          </div>
          {/* <div className="flex justify-between">
            <p className="w-32">Loại sản phẩm:</p>
            <p>{data.cardCategory}</p>
          </div> */}
          <div className="flex justify-between">
            <p className="w-32">Ngày hết hạn:</p>
            <p>{data.dateNumber} ngày</p>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <Button
            onClick={() => {
              sessionStorage.setItem("data", JSON.stringify(data));
              navigate("/pay-package", { state: { packages: data } });
            }}
          >
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
