import React from "react";
import HeadingTitle from "../../commons/HeadingTitle";
import MiniProductItem from "../../commons/MiniProductItem";
import { products } from "../../mock_data/product_categories";

function ProductSection() {
  return (
    <div className="bg-white mx-auto w-[95%] mt-16">
      {/* Featured Products */}
      <HeadingTitle title="Featured Products" />

      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((f) => f.isFeatured)
          .map((product) => {
            return <MiniProductItem product={product} />;
          })}
      </div>

      <div className="my-16"></div>

      {/* Best Sellers */}
      <HeadingTitle title="Best Sellers" />

      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((f) => f.isBestSeller)
          .map((product) => {
            return <MiniProductItem product={product} />;
          })}
      </div>

      <div className="my-16"></div>

      {/* New Arrival Products */}
      <HeadingTitle title="New Arrival Products" />

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
