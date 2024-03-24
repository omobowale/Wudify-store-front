import React from "react";

function MiniProductItem({ product }) {
  return (
    <a href={`/products/${product?.slug}`}>
      <div className="cursor-pointer hover:opacity-70">
        <div className="h-[319px]" style={{ overflow: "hidden" }}>
          <img
            style={{ objectFit: "contain" }}
            src={product.imagePath}
            className="h-[319px] w-full rounded-md"
            alt=""
          />
        </div>
        <div className="px-1" style={{ marginTop: "-1.5em" }}>
          <div className="flex items-center justify-between font-[500] text-[16px]">
            <div>{product.name}</div>
            <div>N{product.price}</div>
          </div>
          <div className="text-left mt-1">{product.color}</div>
        </div>
      </div>
    </a>
  );
}

export default MiniProductItem;
