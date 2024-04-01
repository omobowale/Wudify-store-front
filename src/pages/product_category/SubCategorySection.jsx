import React, { useState } from "react";
import SlidingArrows from "../../commons/SlidingArrows";
import SubCategoryMiniItem from "../../commons/SubCategoryMiniItem";

function SubCategorySection({ subcategories }) {
  const [index, setIndex] = useState(0);
  const THUMBNAIL_PER_PAGE = 6;

  const changeIndex = (step) => {
    if (step > 0) {
      increment();
    } else {
      decrement();
    }
  };

  const increment = () => {
    if (index < subcategories.length - THUMBNAIL_PER_PAGE) {
      setIndex((prev) => ++prev);
    }
  };

  const decrement = () => {
    if (index > 0) {
      setIndex((prev) => --prev);
    }
  };
  return (
    <div
      className="w-[96%] mx-auto my-4 relative"
      style={{ overflow: "hidden" }}
    >
      <div
        className={`flex gap-4 ${
          subcategories.length < THUMBNAIL_PER_PAGE && "justify-center"
        }`}
        style={{
          width: "100%",
          display: "flex",
          overflow: "",
          transition: "all 1.5s ease",
          transform: `translateX(${index * -210}px)`,
        }}
      >
        {subcategories.map((subcategory) => {
          return <SubCategoryMiniItem subCategory={subcategory} />;
        })}

        {/* {subcategories.map((subcategory) => {
          return <SubCategoryMiniItem subCategory={subcategory} />;
        })} */}
      </div>
      {subcategories.length > 6 && (
        <SlidingArrows
          topPositionClass="top-[5vh]"
          widthClass="w-full"
          leftPositionClass="left-[0]"
          showLeftArrow={index > 0}
          showRightArrow={index < subcategories.length - THUMBNAIL_PER_PAGE}
          onLeftArrowClick={() => changeIndex(-1)}
          onRightArrowClick={() => changeIndex(+1)}
        />
      )}
    </div>
  );
}

export default SubCategorySection;
