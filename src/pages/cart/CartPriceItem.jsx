import React from "react";

function CartPriceItem({ title, price }) {
  return (
    <div className="flex justify-between my-3 font-[500] text-[14px]">
      <div className="text-[#475367]">{title}</div>
      <div>{price}</div>
    </div>
  );
}

export default CartPriceItem;
