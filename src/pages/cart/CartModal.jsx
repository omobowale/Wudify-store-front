import React from "react";
import { IoClose } from "react-icons/io5";
import ViewAllButton from "../../commons/ViewAllButton";
import CartModalItem from "./CartModalItem";
import CartPriceItem from "../../commons/CartPriceItem";

function CartModal({ cart, open, onClose }) {
  return (
    <div
      className="p-4 shadow-md rounded-lg"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex gap-3 items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="font-[600] text-[16px]">My Cart</div>
          <div className="w-[30px] h-[30px] rounded-full text-white bg-orange-400 p-2 flex items-center justify-center">
            {cart?.items?.length ?? 0}
          </div>
        </div>
        <div>
          <IoClose onClick={onClose} className="cursor-pointer text-lg" />
        </div>
      </div>

      {/*  */}
      <div className="mt-8 flex flex-col gap-4">
        <CartModalItem />
        <CartModalItem />
        <CartModalItem />
      </div>

      <div className="mt-6 mb-4">
        <CartPriceItem title="Sub Total" price="N150000" />
      </div>

      <hr />

      <div className="mt-4">
        <a href="/my-cart">
          <ViewAllButton
            className="hover:text-white w-full text-center py-3 items-center hover:bg-orange-400 text-orange-400 bg-white"
            text="View Cart"
          />
        </a>
      </div>
    </div>
  );
}

export default CartModal;
