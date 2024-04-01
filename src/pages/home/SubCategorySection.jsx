import React, { useState } from "react";
import { product_sub_categories } from "../../mock_data/product_categories";
import SubCategoryItem from "../../commons/SubCategoryItem";
import SlidingArrows from "../../commons/SlidingArrows";

function SubCategorySection() {
  const [index, setIndex] = useState(0);


  const changeIndex = (step) => {
    if (step > 0) {
      increment();
    } else {
      decrement();
    }
  };

  const increment = () => {
    if (index < product_sub_categories.length - 4) {
      setIndex((prev) => ++prev);
    }
  };

  const decrement = () => {
    if (index > 0) {
      setIndex((prev) => --prev);
    }
  };

  return (
    <div className="relative w-[95%] mx-auto" style={{ overflow: "hidden" }}>
      <div
        className="mx-auto gap-4"
        style={{
          width: "100%",
          display: "flex",
          overflow: "",
          transition: "all 1.5s ease",
          transform: `translateX(${index * -315}px)`,
        }}
      >
        {product_sub_categories.map((sub_cat) => {
          return <SubCategoryItem subCategory={sub_cat} />;
        })}
      </div>
      <SlidingArrows
        leftPositionClass="left-0"
        topPositionClass="top-[12vh]"
        showLeftArrow={index > 0}
        showRightArrow={index < product_sub_categories.length - 4}
        widthClass="w-[100%]"
        onLeftArrowClick={() => changeIndex(-1)}
        onRightArrowClick={() => changeIndex(+1)}
      />
    </div>
  );
}

export default SubCategorySection;
