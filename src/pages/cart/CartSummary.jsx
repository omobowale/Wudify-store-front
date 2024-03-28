import React from "react";
import ViewAllButton from "../../commons/ViewAllButton";
import CartPriceItem from "./CartPriceItem";

function CartSummary() {
  return (
    <div className="p-5 rounded-lg bg-white shadow-md h-full">
      <div className="mb-8">
        <div className="font-[600] text-[20px]">Cart Summary</div>
      </div>

      <hr />

      <CartPriceItem title="Sub Total" price="N3000" />

      <hr />

      <CartPriceItem title="VAT" price="N200" />
      <hr />

      <CartPriceItem title="Total" price="N3200" />

      <div className="mt-8">
        <ViewAllButton
          className="hover:text-white w-full text-center py-3 items-center hover:bg-orange-400 text-orange-400 bg-white"
          text="Checkout"
        />
      </div>
    </div>
  );
}

export default CartSummary;
