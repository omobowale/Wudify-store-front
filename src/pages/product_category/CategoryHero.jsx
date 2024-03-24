import React from "react";

function CategoryHero({ name, imagePath, text }) {
  return (
    <div>
      <div className="h-[225px] relative">
        <img
          className="w-full h-full"
          style={{ objectFit: "cover", opacity: "" }}
          src="/assets/category_hero_image.jpg"
          alt=""
        />
        {/* Overlay */}
        <div
          className="h-[225px] absolute w-full top-0 flex flex-col gap-4 items-center justify-center text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <h3 className="text-[40px] font-[600]">{name}</h3>
          <p className="text-[15px] font-[500] w-[35%]">
            Shop from the selected categories and enjoy up to 40% discount this
            Black Friday season.
          </p>
          
          
        </div>
      </div>
    </div>
  );
}

export default CategoryHero;
