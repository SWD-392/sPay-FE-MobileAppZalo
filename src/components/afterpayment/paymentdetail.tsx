import React, { useEffect, useRef, useState } from "react";
import { getMembershipByUserKey } from "../../service";
import {
  Box,
  Button,
  Input,
  Slider,
  Swiper,
  useNavigate,
  useSnackbar,
} from "zmp-ui";
import MembershipCard from "./membershipcard";
import { creatOrder } from "../../service/order";
import { events } from "zmp-sdk";
// Import your SVG or PNG logo here

interface StoreData {
  no: number;
  storeKey: string;
  storeName: string;
  storeCategory: string;
  storeCateKey: string;
  ownerName: string;
  phoneNumber: string;
  balance: number | null;
  insDate: string;
  status: number;
}

type PromotionCardData = {
  items: Array<any>; // replace 'any' with the type of the items if known
};

interface CardProps {
  data: StoreData;
}

const PaymentDetailCard: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();

  const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
  const timmerId = useRef();

  const userKey = localStorage.getItem("user");
  const [promotionCardData, setPromotionCardData] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      const result = await getMembershipByUserKey(
        userKey as string,
        data.storeCateKey
      );
      setPromotionCardData(result.data.items);
    };

    fetchStore();
  }, []);

  useEffect(
    () => () => {
      closeSnackbar();
      clearInterval(timmerId.current);
    },
    []
  );

  const [formValues, setFormValues] = useState({
    description: "",
    totalAmount: 0,
    storeKey: data.storeKey,
    membershipKey: "",
  });

  const validateForm = () => {
    let errors: string[] = [];

    // Check if description is empty
    if (!formValues.description.trim()) {
      errors.push("Description is required");
      openSnackbar({
        text: "Nhập mô tả giao dịch",
        type: "error",
      });
    }

    // Check if totalAmount is zero or negative
    if (formValues.totalAmount <= 0) {
      errors.push("Total amount must be greater than zero");
    }

    // Check if storeKey is empty
    if (!formValues.storeKey.trim()) {
      errors.push("Store key is required");
    }

    // Check if membershipKey is empty
    if (!formValues.membershipKey.trim()) {
      errors.push("Membership key is required");
    }

    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();

    if (errors.length > 0) {
      // Handle errors here
      console.log(errors);
    } else {
      handlePayment();
    }
  };

  const handlePayment = async () => {
    await creatOrder(formValues).then((res) => {
      if (res && res.status === 200) {
        openSnackbar({
          text: "Thanh toán thành công",
          type: "success",
        });
        navigate("/");
      } else {
        openSnackbar({
          text: "Thanh toán thất bại",
          type: "error",
        });
      }
    });
  };

  return (
    <div className="mt-20 mx-5">
      <div className="flex items-center justify-center">
        <div className="h-full block max-w-sm w-96 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Thông tin thanh toán
          </h5>

          <div className="mt-2">
            <div>Tên cửa hàng: </div>
            <Input
              placeholder="Thông tin cửa hàng"
              name="storeKey"
              disabled
              value={
                data ? data.storeName + " (" + data.storeCateKey + ")" : ""
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
            <div>Nội dung chuyển tiền:</div>
            <Input
              name="description"
              type="text"
              placeholder="Nội dung chuyển tiền"
              onChange={(e) =>
                setFormValues({ ...formValues, description: e.target.value })
              }
            />
          </div>
          <div className="mt-2">
            <div>Nhập số tiền:</div>
            <Input
              name="totalAmount"
              type="number"
              placeholder="Số tiền thanh toán"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  totalAmount: Number(e.target.value),
                })
              }
            />
          </div>

          {/* làm một slider để chọn gói cước */}
          <div>Chọn gói của bạn</div>
          <div className="border border-gray-200 rounded-lg shadow pt-5 pb-10 mt-3">
            <Swiper>
              {promotionCardData.map((promotion, index) => (
                <Box key={index}>
                  <MembershipCard
                    promotion={promotion}
                    onSelect={(selectedPromotion) => {
                      setFormValues({
                        ...formValues,
                        membershipKey: selectedPromotion.membershipKey,
                      });
                    }}
                  />
                </Box>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center justify-center">
            <Box mt={6}>
              <Button
                variant="secondary"
                type="highlight"
                onClick={() => {
                  handleSubmit();
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
