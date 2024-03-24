import React from "react";

function FullRoundedButton({ label, onClick, className }) {

  console.log(className)
  return (
    <button
      onClick={onClick}
      className={`text-[16px] text-center ${className} font-[600] flex gap-3  border rounded-full py-[12px] px-[30px] items-center justify-center`}
    //   style={{ backgroundColor: bgColor, color: textColor }}
    >
      {label}
    </button>
  );
}

export default FullRoundedButton;
