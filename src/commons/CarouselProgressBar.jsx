import React from "react";

function CarouselProgressBar({ numberOfDots = 2, selected }) {
  const getProgressBar = (n) => {
    let list = [];
    for (let i = 0; i < n; i++) {
      list.push(
        <input className="w-[24px] h-[24px]" key={i} name="carousel" type="radio" checked={selected === i} style={{ accentColor: "black" }} />
      );
    }

    return list;
  };
  return (
    <>
      {/* Carousel progress bar */}
      {getProgressBar(numberOfDots)}
    </>
  );
}

export default CarouselProgressBar;
