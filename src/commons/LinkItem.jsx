import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { RxTriangleUp } from "react-icons/rx";
import "./css/linkitem.css";

function LinkItem({
  children,
  label,
  colorClassName = "text-white",
  showDropDown = false,
  link,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div
      className={`py-4 flex gap-1 items-center font-[500] text-[15px] hover:text-orange-300 ${colorClassName} link-item`}
    >
      <div
        className="cursor-pointer relative"
        style={{ zIndex: "3000" }}
        onClick={() => redirectTo(link)}
      >
        <span>{label}</span>
        {children && (
          <div className="absolute top-3 left-5 text-white pointer-icon">
            <RxTriangleUp style={{ fontSize: "40px", fontWeight: "normal" }} />
          </div>
        )}
      </div>
      {children && (
        <>
          {showOptions && (
            <PiCaretUpBold
              className="text-md font-bold cursor-pointer "
              onClick={() => setShowOptions(!showOptions)}
            />
          )}
          {!showOptions && (
            <PiCaretDownBold
              className="text-md font-bold cursor-pointer "
              onClick={() => setShowOptions(!showOptions)}
            />
          )}
        </>
      )}
      {children && (
        <div
          className="absolute top-0 left-0 menu-dropdown mt-2 w-full pb-10"
          style={{ zIndex: "2000" }}
        >
          <div className="bg-white shadow-sm p-3 absolute top-10 mt-0.5">
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LinkItem;
