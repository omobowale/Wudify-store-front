import React from "react";
import SearchInput from "./SearchInput";
import { PiCaretDownBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import LoginButton from "./LoginButton";
import { RxTriangleUp } from "react-icons/rx";
import "./css/login.css";

function TopHeader() {
  return (
    <div className="flex justify-between mx-10 items-center py-4">
      <div className="flex gap-10 items-center w-1/3">
        <img alt="Wudify-logo" src="/assets/wudify_logo_top_header.png" />
        <span className="font-[500] text-[15px]">Be a Partner</span>
      </div>
      <div className="w-1/3">
        <SearchInput />
      </div>
      <div className="w-1/3 flex gap-4 justify-end font-semibold">
        <div className="flex gap-1 items-center">
          <FiHeart className="text-lg" />
          <span>0</span>
        </div>
        <div className="flex gap-1 items-center">
          <IoCartOutline className="text-lg" />
          <span>Cart</span>
        </div>
        <div className="relative flex gap-1 items-center login-container">
          <img src="/assets/user_logo.png" alt="Wudify user logo" />
          <div className="flex gap-1 cursor-pointer hover:text-orange-300">
            <span className="hover:text-orange-300">Login</span>
            <PiCaretDownBold className="text-lg font-bold" />
          </div>
          <div
            className="bg-white w-[8em] left-2 absolute top-10 border p-3 rounded-md login-option"
            style={{ zIndex: "1000" }}
          >
            <RxTriangleUp
              className="absolute text-gray-100"
              style={{
                fontSize: "40px",
                fontWeight: "normal",
                top: "-24px",
                left: "26px",
              }}
            />
            <div className="flex gap-2 flex-col">
              <LoginButton label={"Customer"} />
              <span className="font-semibold text-xs">Or</span>
              <LoginButton label={"Vendor"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
