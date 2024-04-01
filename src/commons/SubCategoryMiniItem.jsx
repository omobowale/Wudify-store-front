import React from "react";

function SubCategoryMiniItem({ subCategory, itemClassWidth }) {
  return (
    <div className="rounded-sm" style={{ minWidth: "200px" }}>
      <img alt=""  src={subCategory.thumbnailImagePath} className="rounded-sm w-full h-[97px]" />
      <p className="font-[500] mt-2 text-[16px]">{subCategory.name}</p>
    </div>
  );
}

export default SubCategoryMiniItem;
