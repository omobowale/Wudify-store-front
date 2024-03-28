import React from "react";

function ViewAllButton({
  text = "View All",
  children,
  className = "hover:text-white hover:bg-black",
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 border border-2 font-[600] text-[14px] py-1.5 px-3.5 rounded-full ${className}`}
    >
      <p>{text}</p>
      {children}
    </button>
  );
}

export default ViewAllButton;
