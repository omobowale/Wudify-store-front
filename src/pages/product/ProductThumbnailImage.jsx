import React from "react";

function ProductThumbnailImage({ imagePath, onSelect, selected }) {
  return (
    <div className={`${selected ? "border border-orange-400" : ""} hover:border-orange-400 hover:border hover:opacity-80 cursor-pointer w-full`} onClick={() => onSelect(imagePath)}>
      <img
        className="w-full"
        src={imagePath}
        alt=""
        style={{
          height: "120px",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ProductThumbnailImage;
