import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import FullRoundedButton from "../../commons/FullRoundedButton";
import ViewAllButton from "../../commons/ViewAllButton";

function CartItem() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <div className="h-[120px] w-[120px]">
          <img
            className="w-full h-full rounded-lg"
            style={{ objectFit: "cover" }}
            src="/assets/living_room.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-around">
          <p className="font-[600] text-[18px]">Lisola Sofa Retro</p>
          <p className="font-[500] text-[14px]">Installation fee</p>
          <p className="font-[400] text-[14px] text-[#475367]">Color: Black</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col justify-around">
          <p className="font-[600] text-[18px]">Amount: N50000</p>
          <p className="font-[500] text-[14px]">Amount: N10000</p>
          <div>
            {/* <FullRoundedButton label={"Add to wishlist"} /> */}
            <ViewAllButton text="Add to wishlist" className="border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400" />
          </div>
        </div>
      </div>

      <div className="flex-col flex ">
        <IoTrashBinOutline className="text-[20px] mt-10 cursor-pointer text-red-600" />
      </div>
    </div>
  );
}

export default CartItem;
