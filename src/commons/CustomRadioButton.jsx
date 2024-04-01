import React from "react";

function CustomRadioButton({ radioName, accentColor = "black" }) {
  return (
    <input
      name={radioName}
      type="radio"
      className="w-[20px] h-[20px] mt-1"
      style={{ accentColor }}
    />
  );
}

export default CustomRadioButton;
