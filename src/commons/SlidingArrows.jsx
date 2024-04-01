import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselArrow from "./CarouselArrow";

function SlidingArrows({
  widthClass = "w-[97%]",
  topPositionClass = "top-[15vh]",
  showLeftArrow = true,
  showRightArrow = true,
  leftPositionClass = "left-5",
  onLeftArrowClick,
  onRightArrowClick,
}) {
  return (
    <div>
      <div
        className={`flex justify-between absolute ${widthClass} ${topPositionClass} ${leftPositionClass}`}
      >
        {showLeftArrow ? (
          <CarouselArrow>
            <MdKeyboardArrowLeft
              className="text-lg"
              onClick={onLeftArrowClick}
            />
          </CarouselArrow>
        ) : (
          <div></div>
        )}

        {showRightArrow ? (
          <CarouselArrow>
            <MdKeyboardArrowRight
              className="text-lg"
              onClick={onRightArrowClick}
            />
          </CarouselArrow>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default SlidingArrows;
