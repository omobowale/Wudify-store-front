import React from "react";

function ColorCircle({ colorHex, getColor }) {
  return (
    <div
      onClick={() => getColor(colorHex)}
      className="w-[34px] flex items-center justify-center h-[34px] hover:border hover:border-orange-300 rounded-full cursor-pointer"
    >
      <div
        className={`w-[28px] h-[28px] border rounded-full bg-[${colorHex}]`}
        style={{ backgroundColor: colorHex }}
      ></div>
    </div>
  );
}

export default ColorCircle;
