import React from "react";

function CarouselArrow({children, onClick}) {
  return (
    <div onClick={onClick} className="cursor-pointer p-1.5 flex items-center justify-center rounded-full bg-gray-200 opacity-80">
      {children}
    </div>
  );
}

export default CarouselArrow;
