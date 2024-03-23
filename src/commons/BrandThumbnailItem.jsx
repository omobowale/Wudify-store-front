import React from "react";

function BrandThumbnailItem({ brand }) {
  return (
    <div className="h-[38.22px]">
      <img
        className="w-full h-full"
        src={brand.imagePath}
        style={{ objectFit: "cover" }}
        alt={`wudify_with_brand_${brand.name}`}
      />
    </div>
  );
}

export default BrandThumbnailItem;
