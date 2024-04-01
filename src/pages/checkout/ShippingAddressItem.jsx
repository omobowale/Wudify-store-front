import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import CustomRadioButton from "../../commons/CustomRadioButton";

function ShippingAddressItem({
  radioName = "check",
  fullName,
  email,
  telephone,
}) {
  return (
    <div className="flex items-start my-5">
      <div className="w-[5%]">
        <CustomRadioButton radioName={radioName} />
      </div>
      <div className="w-[88%] flex flex-col gap-3">
        <div className="font-[600] text-[14px]">Alexandar McPherson</div>
        <div className="flex gap-2 items-center">
          <div>
            <img src="/assets/address-icon.png" alt="wudify-address-icon" />
          </div>
          <div className="text-[#828282] text-[14px] font-[500]">
            20386 Donovans Rd, Georgetown, Delaware(DE)
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src="/assets/telephone-icon.png" alt="wudify-telephone-icon" />
          </div>
          <div className="text-[#828282] text-[14px] font-[500]">
            +1 23455246337
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src="/assets/email-icon.png" alt="wudify-email-icon" />
          </div>
          <div className="text-[#828282] text-[14px] font-[500]">
            alexandramcpherson@email.com
          </div>
        </div>
      </div>
      <div className="flex gap-1 text-orange-400 text-[14px] font-[600] cursor-pointer">
        <div>
          <LiaEditSolid className="text-[18px]" />
        </div>
        <div>Edit</div>
      </div>
    </div>
  );
}

export default ShippingAddressItem;
