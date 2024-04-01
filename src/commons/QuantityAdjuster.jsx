import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function QuantityAdjuster({ quantityValue, setQuantityValue, className=" p-[12px] w-[152px] text-[20px] font-[600] " }) {
  const increment = () => {
    setQuantityValue((prev) => ++prev);
  };

  const decrement = () => {
    if (quantityValue > 0) {
      setQuantityValue((prev) => --prev);
    }
  };

  const setToDefault = () => {
    if (quantityValue.toString().length === 0) {
      setQuantityValue(0);
    }
  };

  const handleQuantityValueChange = (e, callback) => {
    let val = e.target.value;
    console.log(val);
    let numberOnly = "";
    for (let x of val) {
      if (/\^*[0-9]/.test(x)) {
        numberOnly += x;
      }
    }

    callback(numberOnly);
  };

  return (
    <div className={`${className} bg-[#EAECF0] flex gap-3 border rounded-full items-center justify-between`}>
      <div
        className="w-1/4 cursor-pointer hover:text-orange-300"
        onClick={decrement}
      >
        <AiOutlineMinus className="" />
      </div>
      <div className="w-1/2">
        <input
          onBlur={setToDefault}
          className="outline-none w-full text-center bg-[transparent]"
          value={quantityValue}
          onChange={(e) => handleQuantityValueChange(e, setQuantityValue)}
        />
      </div>
      <div
        className="w-1/4 cursor-pointer hover:text-orange-300"
        onClick={increment}
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}

export default QuantityAdjuster;
