import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function DividedPage({ leftSection, rightSection }) {
  return (
    <div className="flex justify-between w-full gap-12 mt-6 pb-20">
      <div className="w-[60%] text-left">
        <LeftSection>{leftSection}</LeftSection>
      </div>
      <div className="w-[35%] text-left">
        <RightSection>{rightSection}</RightSection>
      </div>
    </div>
  );
}

export default DividedPage;
