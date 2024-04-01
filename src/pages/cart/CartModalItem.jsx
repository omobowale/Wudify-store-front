import React, { useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import FullRoundedButton from "../../commons/FullRoundedButton";
import QuantityAdjuster from "../../commons/QuantityAdjuster";
import ViewAllButton from "../../commons/ViewAllButton";

function CartModalItem() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex justify-between">
      <div className="flex gap-8">
        <div className="h-[96px] w-[96px]">
          <img
            className="w-full h-full rounded-lg"
            style={{ objectFit: "cover" }}
            src="/assets/living_room.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-around text-left">
          <p className="font-[600] text-[12px]">Lisola Sofa Retro</p>
          <p className="font-[500] text-[10px] text-orange-400">
            Amount: N50000
          </p>
          <p className="font-[400] text-[10px] text-[#475367]">Color: Black</p>
          <QuantityAdjuster
            setQuantityValue={setQuantity}
            quantityValue={quantity}
            className={`font-[500] text-[14px] w-1/3 py-1 px-2`}
          />
        </div>
      </div>

      <div className="flex-col flex ">
        <IoTrashBinOutline className="text-[20px] mt-10 cursor-pointer text-red-600" />
      </div>
    </div>
  );
}

export default CartModalItem;
