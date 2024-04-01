import React from "react";

function SubCategoryItem({ subCategory }) {
  return (
    <div className="rounded-sm shadow-sm " style={{ minWidth: "300.5px" }}>
      <img alt="" src={subCategory.thumbnailImagePath} className="rounded-sm" />
      <p className="font-[500] mt-2 text-[18px]">{subCategory.name}</p>
    </div>
  );
}

export default SubCategoryItem;
