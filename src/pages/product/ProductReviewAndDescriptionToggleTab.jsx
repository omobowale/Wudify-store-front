import React from "react";

function ProductReviewAndDescriptionToggleTab({
  leftText,
  rightText,
  selected,
  setSelected,
}) {
  return (
    <div className="flex gap-8 items-center justify-start text-[18px] font-[600]">
      <div
        className={`py-4 cursor-pointer ${
          selected === leftText ? "border-b-2 border-black" : "opacity-40"
        } `}
        onClick={() => setSelected(leftText)}
      >
        {leftText}
      </div>
      <div
        className={`py-4 cursor-pointer ${
          selected === rightText ? "border-b-2 border-black" : "opacity-40"
        } `}
        onClick={() => setSelected(rightText)}
      >
        {rightText}
      </div>
    </div>
  );
}

export default ProductReviewAndDescriptionToggleTab;
