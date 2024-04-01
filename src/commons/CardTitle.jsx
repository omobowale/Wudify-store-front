import React from "react";

function CardTitle({ title }) {
  return (
    <div>
      <div className="mb-8">
        <div className="font-[600] text-[20px]">{title}</div>
      </div>
    </div>
  );
}

export default CardTitle;
