import React from "react";
import { useNavigate } from "zmp-ui";
// Import your SVG or PNG logo here

interface PackageData {
  packageID: number;
  packageName: string;
  packageDescription: string;
  cardCategory: string;
  price: number;
  expireIn: number;
}

interface CardProps {
  data: PackageData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="block max-w-sm w-96 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.packageName}
          </h5>
          <p>{data.packageDescription}</p>
          <p>Số tiền còn lại: {data.price}đ</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Loại sản phẩm :{data.cardCategory}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ngày hết hạn: {data.expireIn} ngày
          </p>
          <button
            onClick={() => {
              navigate("/payment");
            }}
          >
            thanh toán
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;