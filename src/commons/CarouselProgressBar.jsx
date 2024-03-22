import React from "react";

function CarouselProgressBar({ numberOfDots = 2, selected }) {
  const getProgressBar = (n) => {
    let list = [];
    for (let i = 0; i < n; i++) {
      list.push(
        <input key={i} name="carousel" type="radio" checked={selected === i} style={{ accentColor: "white" }} />
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
