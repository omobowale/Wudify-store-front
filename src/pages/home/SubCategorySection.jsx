import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselArrow from "../../commons/CarouselArrow";
import { product_sub_categories } from "../../mock_data/product_categories";
import SubCategoryItem from "../../commons/SubCategoryItem";
import SlidingArrows from "../../commons/SlidingArrows";

function SubCategorySection() {
  return (
    <div className="relative" style={{ overflow: "hidden" }}>
      <div
        className="mx-auto gap-4"
        style={{ width: "95%", display: "flex", overflow: "hidden" }}
      >
        {product_sub_categories.map((sub_cat) => {
          return <SubCategoryItem subCategory={sub_cat} />;
        })}
      </div>
      <SlidingArrows  />
    </div>
  );
}

export default SubCategorySection;
