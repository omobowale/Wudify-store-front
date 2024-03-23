import React from "react";

function MiniProductItem({ product }) {
  return (
    <div className="cursor-pointer hover:opacity-70">
      <img
        style={{ objectFit: "contain" }}
        src={product.imagePath}
        className="h-[319px] w-full rounded-md"
        alt=""
      />
      <div className="px-1" style={{ marginTop: "-1.5em" }}>
        <div className="flex items-center justify-between font-[500] text-[16px]">
          <div>{product.name}</div>
          <div>N{product.price}</div>
        </div>
        <div className="text-left mt-1">{product.color}</div>
      </div>
    </div>
  );
}

export default MiniProductItem;
