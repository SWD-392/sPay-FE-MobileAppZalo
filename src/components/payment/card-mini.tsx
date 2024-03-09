import React, { useEffect, useRef } from "react";
import { Box, Button, useNavigate, useSnackbar } from "zmp-ui";
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

const CardMini: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();

  const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
  const timmerId = useRef();

  useEffect(
    () => () => {
      closeSnackbar();
      clearInterval(timmerId.current);
    },
    []
  );

  return (
    <div className="flex items-center justify-center">
      <div className="block max-w-sm w-96 p-6 mt-5 bg-white border border-gray-200 rounded-lg ">
        <div className="flex items-center">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.cardName}
            </h5>
            <p>Thanh toán: {data.price}đ</p>
            <p>Thực nhận: {data.moneyValue}đ</p>
            <p>Giảm giá: {data.discountPercentage}%</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {/* Loại sản phẩm :{data.cardCategory} */}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Ngày hết hạn: {data.dateNumber} ngày
            </p>
          </div>
          <div className="m-auto">
            <Button
              className="mt-5 mb-5 ml-8"
              variant="secondary"
              size="small"
              type="highlight"
              onClick={() => {
                openSnackbar({
                  text: "Chọn gói thành công!",
                  type: "success",
                });
                navigate("/pay-package", { state: { packages: data } });
              }}
            >
              Chọn gói
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
