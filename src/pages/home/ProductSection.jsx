import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeadingTitle from "../../commons/HeadingTitle";
import MiniProductItem from "../../commons/MiniProductItem";
import ViewAllButton from "../../commons/ViewAllButton";
import { products } from "../../mock_data/product_categories";

function ProductSection() {
  return (
    <div className="bg-white mx-auto w-[95%] mt-16">
      {/* Featured Products */}
      <div className="flex justify-between items-center">
        <HeadingTitle title="Featured Products" />
        <ViewAllButton>
          <IoIosArrowRoundForward className="text-lg" />
        </ViewAllButton>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((f) => f.isFeatured)
          .map((product) => {
            return <MiniProductItem product={product} />;
          })}
      </div>

      <div className="my-16"></div>

      {/* Best Sellers */}
      <div className="flex justify-between items-center">
        <HeadingTitle title="Best Sellers" />
        <ViewAllButton>
          <IoIosArrowRoundForward className="text-lg" />
        </ViewAllButton>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((f) => f.isBestSeller)
          .map((product) => {
            return <MiniProductItem product={product} />;
          })}
      </div>

      <div className="my-16"></div>

      {/* New Arrival Products */}
      <div className="flex justify-between items-center">
        <HeadingTitle title="New Arrival Products" />
        <ViewAllButton>
          <IoIosArrowRoundForward className="text-lg" />
        </ViewAllButton>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((f) => f.isNewArrival)
          .map((product) => {
            return <MiniProductItem product={product} />;
          })}
      </div>
    </div>
  );
}

export default ProductSection;
