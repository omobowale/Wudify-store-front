import React from "react";
import { fetchSubCategories } from "../helpers/products";
import { product_sub_categories } from "../mock_data/product_categories";
import LinkItem from "./LinkItem";

function BottomHeader() {
  return (
    <div className="bg-black px-10 flex items-center justify-between relative">
      <div className="flex gap-10">
        <LinkItem label={"Shop Furniture"} showDropDown>
          <div className="grid grid-cols-4 text-black w-[70em] text-left gap-12 px-4">
            {fetchSubCategories(product_sub_categories, 1)?.map((subcat) => {
              return (
                <div>
                  <div
                    className="py-1.5 border-b-2 border-gray-200 text-orange-400"
                    style={{ fontSize: "14px" }}
                  >
                    {subcat?.name}
                  </div>
                  <div className="font-normal mt-2 flex flex-col gap-1.5">
                    {subcat?.products?.map((product) => {
                      return (
                        <div className="cursor-pointer hover:text-orange-300">
                          {product.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </LinkItem>
        <LinkItem label={"Decor & More"} showDropDown>
          <div
            className={`grid grid-cols-4 text-black w-[70em] gap-12 text-left px-4`}
          >
            {fetchSubCategories(product_sub_categories, 2)?.map((subcat) => {
              return (
                <div>
                  <div
                    className="py-1.5 border-b-2 border-gray-200 text-orange-400"
                    style={{ fontSize: "14px" }}
                  >
                    {subcat?.name}
                  </div>
                  <div className="font-normal mt-2 flex flex-col gap-1">
                    {subcat?.products?.map((product) => {
                      return (
                        <div className="cursor-pointer hover:text-orange-300">
                          {product.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </LinkItem>
        <LinkItem label={"Lighting"} showDropDown>
          <div className="grid grid-cols-4 text-black w-[70em] text-left gap-12 px-4">
            {fetchSubCategories(product_sub_categories, 3)?.map((subcat) => {
              return (
                <div>
                  <div
                    className="py-1.5 border-b-2 border-gray-200 text-orange-400"
                    style={{ fontSize: "14px" }}
                  >
                    {subcat?.name}
                  </div>
                  <div className="font-normal mt-2 flex flex-col gap-1">
                    {subcat?.products?.map((product) => {
                      return (
                        <div className="cursor-pointer hover:text-orange-300">
                          {product.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </LinkItem>
        <LinkItem label={"Bespoke Service"} />
        <LinkItem label={"Inspiration"} showDropDown />
        <LinkItem label={"Sales"} />
      </div>
      <div className="text-orange-300 hover:text-white cursor-pointer font-[500] text-[15px]">
        Book a Consultation
      </div>
    </div>
  );
}

export default BottomHeader;
