import React, { useState } from "react";
import { Button, Swiper } from "zmp-ui";

type Promotion = {
  cardName: string;
  packageName: string;
  balance: number;
  cateShop: string;
  expiredDate: string;
  membershipKey: string;
};

type MembershipCardProps = {
  promotion: Promotion;
  onSelect: (selectedPromotion: Promotion) => void;
};

const MembershipCard: React.FC<MembershipCardProps> = ({
  promotion,
  onSelect,
}) => {
  const [buttonState, setButtonState] = useState(true);

  return (
    <Swiper.Slide>
      <div className="flex">
        <div className="ml-3">
          <h3>{promotion.cardName}</h3>
          <p className="mt-3">Số dư: {promotion.balance}</p>
          <p className="mt-3">Ngày hết hạn: {promotion.expiredDate}</p>
          <div className="flex items-center justify-center w-full mt-5">
            {buttonState ? (
              <Button
                className="myButton"
                size="small"
                onClick={() => {
                  onSelect(promotion);
                  setButtonState(false);
                }}
              >
                Chọn
              </Button>
            ) : (
              <Button
                disabled
                className="myButton"
                size="small"
                onClick={() => onSelect(promotion)}
              >
                Đã Chọn
              </Button>
            )}
          </div>
        </div>
      </div>
    </Swiper.Slide>
  );
};

export default MembershipCard;
