import React from "react";
import RelatedProductItem from "../../commons/RelatedProductItem";

function RelatedProductsSection({ products }) {
  return (
    <div className="flex gap-4">
      {products.map((product) => {
        return <RelatedProductItem product={product} />;
      })}
    </div>
  );
}

export default RelatedProductsSection;
