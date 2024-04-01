import React from "react";

function CarouselArrow({children, onClick}) {
  return (
    <div onClick={onClick} className="cursor-pointer p-1.5 flex items-center justify-center rounded-full bg-gray-300 hover:bg-black hover:text-white">
      {children}
    </div>
  );
}

export default CarouselArrow;
