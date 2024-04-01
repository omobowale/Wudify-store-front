import React from "react";
import './loaders.css'

function HeroItemLoader() {
  return (
    <div
      className={`flex pt-[12em] rounded-sm border h-full mx-auto shadow-md hero-item-loader-container`}
      style={{
        width: "100%",
        
      }}
    >
      <div className="w-full mx-auto">
        <p className="text-white py-4 px-2.5 rounded-full bg-gray-200 w-[10em] mx-auto"></p>
        <p
          className="font-[500] w-[60%] mx-auto py-[0.2em] bg-gray-200"
          style={{ fontSize: "7em", marginTop: "0.7em", marginBottom: "0.7em" }}
        ></p>
        <button className="bg-gray-200 text-black rounded-md py-3 px-6 font-semibold w-[10em]">
          &nbsp;
        </button>
      </div>
    </div>
  );
}

export default HeroItemLoader;
