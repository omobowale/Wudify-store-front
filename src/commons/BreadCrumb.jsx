import React from "react";

function BreadCrumb({ main, sub }) {
  return (
    <div className="font-[500] text-[14px] flex gap-2">
      <div>{main}</div>
      <div> / </div>
      <div className="text-orange-400">{sub}</div>
    </div>
  );
}

export default BreadCrumb;
