import React from "react";
import Card from "./card-payment";

interface PaymentDetailProps {
  amount: number;
  date: string;
}

const PaymentDetail = ({ amount, date }) => {
  const packages = [
    {
      packageID: 1,
      packageName: "Gói cơ bản",
      price: 100000,
      cardCategory: "Đồ ăn",
      expireIn: 2,
    },
    {
      packageID: 2,
      packageName: "Gói ăn uống",
      price: 100000,
      cardCategory: "Mua sắm",
      expireIn: 1,
    },
    {
      packageID: 3,
      packageName: "Gói mua sắm",
      cardCategory: "Phụ kiện",
      price: 300000,
      expireIn: 3,
    },
  ];
  return (
    // <div
    //
    // >
    //   <h2></h2>
    //   <p>
    //
    //   </p>
    //   <p>
    //
    //   </p>
    // </div>
    <div className="flex items-center justify-center mt-16">
      <a
        href="#"
        className="h-full block max-w-sm w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Thông tin thanh toán
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Số tiền cần thanh toán:</strong> {amount}đ
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Ngày giao dịch:</strong> {date}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Chọn gói thanh toán
        </p>
        {packages.map((packageItem) => (
          <Card key={packageItem.packageID} data={packageItem} />
        ))}
      </a>
    </div>
  );
};

export default PaymentDetail;
