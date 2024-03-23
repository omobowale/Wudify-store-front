import React from "react";
import BrandThumbnailItem from "../../commons/BrandThumbnailItem";
import { brands } from "../../mock_data/brands";

function BrandSection() {
  return (
    <div className="flex justify-center gap-10 my-12">
      {brands.map(brand => {
          return <BrandThumbnailItem brand={brand} />
      })}
      
    </div>
  );
}

export default BrandSection;
