import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselArrow from "../../commons/CarouselArrow";
import { product_sub_categories } from "../../mock_data/product_categories";
import SubCategoryItem from "../../commons/SubCategoryItem";

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
      <div className="flex justify-between absolute w-[97%] top-[15vh] left-5">
        <CarouselArrow>
          <MdKeyboardArrowLeft className="text-lg" onClick={() => {}} />
        </CarouselArrow>
        <CarouselArrow>
          <MdKeyboardArrowRight className="text-lg" onClick={() => {}} />
        </CarouselArrow>
      </div>
    </div>
  );
}

export default SubCategorySection;
