import React from "react";

function CustomMiniButton({
  label,
  colorClass = "white",
  bgColorClass = "orange-400",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-${bgColorClass} text-${colorClass} rounded-lg py-3 px-7 text-[14px] hover:bg-${colorClass} hover:text-${bgColorClass}`}
    >
      {label}
    </button>
  );
}

export default CustomMiniButton;
