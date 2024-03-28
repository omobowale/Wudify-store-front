import React from "react";
import ReviewStar from "./ReviewStar";
import { PiShoppingCartSimple } from "react-icons/pi";

function RelatedProductItem({ product }) {
  return (
    <div className="cursor-pointer hover:opacity-70">
      <a href={`/products/${product?.slug}`}>
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
          <div className="flex gap-2 items-start">
            <div className="w-1/3">
              <ReviewStar value={4} />
            </div>
            <div className="text-left mt-1 font-[500]">({91})</div>
          </div>
        </div>
      </a>
      <button className="flex items-center gap-2 border border-2 font-[600] text-[14px] py-1.5 px-3 rounded-full hover:text-white hover:bg-black">
        <PiShoppingCartSimple />
        <p>Add to cart</p>
      </button>
    </div>
  );
}

export default RelatedProductItem;
