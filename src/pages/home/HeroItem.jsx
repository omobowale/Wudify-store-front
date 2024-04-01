import React from "react";

function HeroItem({ heroIndex, selectionIndex, hero }) {
  return (
    <div
      className={`relative rounded-sm h-full block ${
        true// heroIndex === selectionIndex ? "block" : "hidden"
      }`}
      style={{
        // width: "100%",
        minWidth: "100%"
      }}
    >
      <div>
        <img
          src={hero.imageUrl}
          alt="Imag"
          className="h-[667px] w-full rounded-sm"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute top-[30vh] w-full"
      >
        <span className="text-white py-1.5 px-2.5 bg-orange-400 rounded-full">
          {hero.extraText}
        </span>
        <p className="text-white text-lg font-[500]" style={{ fontSize: "7em", margin: "0.7em 0" }}>{hero.title}</p>
        <button className="bg-white text-black rounded-md py-3 px-6 font-semibold hover:bg-black hover:text-white">{hero.buttonText}</button>
      </div>
    </div>
  );
}

export default HeroItem;
