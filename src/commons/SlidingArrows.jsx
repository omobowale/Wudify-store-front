import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselArrow from "./CarouselArrow";

function SlidingArrows({
  widthClass = "w-[97%]",
  topPositionClass = "top-[15vh]",
  onLeftArrowClick,
  onRightArrowClick,
}) {
  return (
    <div>
      <div
        className={`flex justify-between absolute ${widthClass} ${topPositionClass} left-5`}
      >
        <CarouselArrow>
          <MdKeyboardArrowLeft className="text-lg" onClick={onLeftArrowClick} />
        </CarouselArrow>
        <CarouselArrow>
          <MdKeyboardArrowRight
            className="text-lg"
            onClick={onRightArrowClick}
          />
        </CarouselArrow>
      </div>
    </div>
  );
}

export default SlidingArrows;
