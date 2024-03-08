import React, { useEffect, useRef } from "react";
import { Box, Button, useNavigate, useSnackbar } from "zmp-ui";
// Import your SVG or PNG logo here

interface PackageData {
  packageID: number;
  packageName: string;
  price: number;
  cardCategory: string;
  expireIn: number;
}

interface CardProps {
  data: PackageData;
}

const Card: React.FC<CardProps> = ({ data }) => {
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
        <div className="flex items-center justify-center">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.packageName}
            </h5>
            <p>Số tiền còn lại: {data.price}đ</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Loại sản phẩm :{data.cardCategory}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Ngày hết hạn: {data.expireIn} ngày
            </p>
          </div>

          <div className="m-auto">
            <Button
              className="mt-5 mb-5 ml-8"
              variant="secondary"
              type="highlight"
              size="small"
              onClick={() => {
                openSnackbar({
                  text: "Chọn gói thành công!",
                  type: "success",
                });
                navigate("/payment-detail");
              }}
            >
              Chọn mua
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
