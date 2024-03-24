import React, { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { LIGHT_BLUE_COLOR } from "../constants/texts";
import SearchInput from "./SearchInput";
import { CustomScroll } from "react-custom-scroll";

function ProductFilterItem({ name, items, inputPlaceholder, inputOnChange }) {
  const [show, setShow] = useState(true);
  const [style, setStyle] = useState({
    maxHeight: "250px",
    transition: "max-height 0.5s ease-out",
  });

  return (
    <div className="mb-16">
      <div
        className={`cursor-pointer flex justify-between items-center text-[20px] font-[500] text-[${LIGHT_BLUE_COLOR}] mt-8 mb-4`}
        onClick={() => {
          setShow(!show);
          if (show) {
            setStyle({
              maxHeight: "0",
              overflowY: "hidden",
              transition: "max-height 0.5s ease-in",
            });
          } else {
            setStyle({
              maxHeight: "250px",
              transition: "max-height 0.5s ease-out",
            });
          }
        }}

        style={{ color: LIGHT_BLUE_COLOR }}
      >
        <div>{name}</div>
        <div>
          {!show && <PiCaretDownBold className="text-lg font-bold" />}
          {show && <PiCaretUpBold className="text-lg font-bold" />}
        </div>
      </div>
      {
        <div className="" style={style}>
          <div className="mb-3">
            <SearchInput
              placeholder={inputPlaceholder}
              onChange={inputOnChange}
            />
          </div>
          {/* Filter Items */}

          <div>
            <CustomScroll className="" style={{ maxHeight: "200px" }}>
              <div style={{ maxHeight: "200px" }}>
                {items.map((item) => {
                  return (
                    <div className="flex items-center justify-between ">
                      <div className="w-[90%] border-b-2 border-gray-100 py-3 text-[14px] font-[500]">
                        {item}
                      </div>
                      <div className="pr-4">
                        <input
                          className="border border-r-4 border-black"
                          type={"checkbox"}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CustomScroll>
          </div>
        </div>
      }
    </div>
  );
}

export default ProductFilterItem;
