import React, { useEffect, useRef } from "react";
import { Box, Button, useNavigate, useSnackbar } from "zmp-ui";
// Import your SVG or PNG logo here

interface PaymentDetailProps {
  amount: number;
  date: string;
}

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

const PaymentDetailCard = ({ date, amount, data }) => {
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
    <div className="mt-20">
      <div className="flex items-center justify-center">
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

          <a
            href="#"
            className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg "
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {/* {data.packageName} */} Gói cơ bản
            </h5>
            <p>
              Số tiền còn lại: 1000.000đ
              {/* {data.price} */}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Loại sản phẩm : {/* {data.cardCategory} */}
              Đồ ăn
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Ngày hết hạn: 20 ngày
              {/* {data.expireIn} */}
            </p>
          </a>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <Box mt={6}>
          <Button
            variant="secondary"
            type="highlight"
            onClick={() => {
              openSnackbar({
                text: "Thanh toán thành công",
                type: "success",
              });
            }}
          >
            Xác nhận thanh toán
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default PaymentDetailCard;
