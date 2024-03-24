import React from "react";
import SlidingArrows from "../../commons/SlidingArrows";
import SubCategoryMiniItem from "../../commons/SubCategoryMiniItem";

function SubCategorySection({ subcategories }) {
  return (
    <div className="w-[95%] mx-auto my-4 relative">
      <div className="flex gap-4 justify-center">
        {subcategories.map((subcategory) => {
          return <SubCategoryMiniItem subCategory={subcategory} />;
        })}
      </div>
      {subcategories.length > 6 && (
        <SlidingArrows topPositionClass="top-[5vh]" />
      )}
    </div>
  );
}

export default SubCategorySection;
