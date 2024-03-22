import React from "react";

interface PromotionData {
  packageName: string;
  totalMoney: number;
  cateShop: string;
}
interface CardProps {
  promotionCardData: PromotionData[];
}

const UserCard = ({ promotionCardData }) => {
  console.log(promotionCardData);
  return (
    <div className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg ">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {promotionCardData.cardName.length > 30
          ? `${promotionCardData.cardName.substring(0, 30)}...`
          : promotionCardData.cardName}
      </h5>
      <p className="mt-3">Số dư thẻ: {promotionCardData.balance}</p>
      <p className="mt-3">Áp dụng cho : {promotionCardData.storeCateName}</p>
      <p className="mt-3">Thời gian hết hạn: {promotionCardData.expiredDate}</p>
    </div>
  );
};

export default UserCard;
