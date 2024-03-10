import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Input,
  Slider,
  Swiper,
  useNavigate,
  useSnackbar,
} from "zmp-ui";
// Import your SVG or PNG logo here

interface StoreData {
  no: number;
  storeKey: string;
  storeName: string;
  storeCategory: string;
  storeCategoryKey: string;
  ownerName: string;
  phoneNumber: string;
  balance: number | null;
  insDate: string;
  status: number;
}

interface PromotionData {
  packageName: string;
  totalMoney: number;
  cateShop: string;
}

interface CardProps {
  data: StoreData;
  promotionCardData: PromotionData[];
}

const PaymentDetailCard: React.FC<CardProps> = ({
  data,
  promotionCardData,
}) => {
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
    <div className="mt-20 mx-5">
      <div className="flex items-center justify-center">
        <div className="h-full block max-w-sm w-96 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Thông tin thanh toán
          </h5>

          {/* lấy dữ liệu từ api */}
          <div className="mt-2">
            <div>Tên cửa hàng: </div>
            <Input
              placeholder="Thông tin cửa hàng"
              disabled
              value={
                data ? data.storeName + " (" + data.storeCategory + ")" : ""
              }
            />
          </div>
          <div className="mt-2">
            <div>Chủ cửa hàng: </div>
            <Input
              placeholder="Chủ cửa hàng"
              disabled
              value={data ? data.ownerName : ""}
            />
          </div>

          <div className="mt-2">
            <div>Nhập số tiền:</div>
            <Input type="number" placeholder="Số tiền thanh toán" />
          </div>

          {/* làm một slider để chọn gói cước */}
          <div>Chọn gói của bạn</div>
          <div className="border border-gray-200 rounded-lg shadow pt-5 pb-10 mt-3">
            <Swiper>
              {promotionCardData.map((promotion, index) => (
                <Swiper.Slide>
                  <div key={index} className="flex">
                    <div className="ml-3">
                      <h5>{promotion.packageName}</h5>
                      <p className="mt-3">
                        Total Money: {promotion.totalMoney}
                      </p>
                      <p className="mt-3">
                        Category Shop: {promotion.cateShop}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-full mt-5 ml-10">
                      <Button size="small">Chọn</Button>
                    </div>
                  </div>
                </Swiper.Slide>
              ))}
            </Swiper>
          </div>

          {/* <div className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg ">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.packageName}
               Gói cơ bản
            </h5>
            <p>
              Số tiền còn lại: 1000.000đ
              {data.price}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Loại sản phẩm : 
              {data.cardCategory}
              Đồ ăn
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Ngày hết hạn: 20 ngày
              {data.expireIn}
            </p>
          </div> */}
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
      </div>
      {/* Nút thanh toán */}
    </div>
  );
};

export default PaymentDetailCard;
