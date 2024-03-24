import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function ContentBodySection() {
  return (
    <div className="flex w-[95%] mx-auto justify-between my-12 items-start gap-10">
      <div className="w-1/4 text-left">
        <LeftContent />
      </div>
      <div className="w-3/4 text-left">
        <RightContent />
      </div>
    </div>
  );
}

export default ContentBodySection;
