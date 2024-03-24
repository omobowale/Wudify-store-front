import React from "react";

function PageBreadCrumb({ mainText, subText, otherText, isActiveIndex }) {
  return (
    <div className="flex gap-3 text-[14px] font-[500] text-orange-300">
      <div className={`${isActiveIndex === 0 ? "text-black" : ""} flex gap-3`}>
        {mainText}
      </div>
      {subText && (
        <div className={`${isActiveIndex === 1 ? "text-black" : ""} flex gap-3`}>
          <div>/</div>
          <div>{subText}</div>
        </div>
      )}
      {otherText && (
        <div className={`${isActiveIndex === 2 ? "text-black" : ""} flex gap-3`}>
          <div>/</div>
          <div>{otherText}</div>
        </div>
      )}
    </div>
  );
}

export default PageBreadCrumb;
