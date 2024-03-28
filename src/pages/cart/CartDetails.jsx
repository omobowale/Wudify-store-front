import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CartItem from "./CartItem";

function CartDetails({ cart }) {
  return (
    <div className="p-5 rounded-lg bg-white shadow-md">
      <div className="flex justify-between  items-center">
        <div className="flex gap-3 items-center">
          <div className="font-[600] text-[20px]">My Cart</div>
          <div className="w-[30px] h-[30px] rounded-full text-white bg-orange-400 p-2 flex items-center justify-center">
            {cart?.items?.length ?? 0}
          </div>
        </div>
        <div className="flex items-center gap-4 text-[16px] font-[600] text-[#318EC9]">
          <div>Continue shopping</div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      {/* Cart items */}
      <div className="mt-8 flex flex-col gap-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default CartDetails;
