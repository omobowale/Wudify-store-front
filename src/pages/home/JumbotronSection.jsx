import React from "react";
import CustomMiniButton from "../../commons/CustomMiniButton";

function JumbotronSection() {
  return (
    <div className="w-[95%] relative mx-auto bg-red-100 mt-16">
      <div className="">
        <img
          src="/assets/jumbotron_image_1.jpg"
          alt=""
          className="h-[640px] w-full"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="w-full absolute top-[25vh] mx-auto">
        <div className="h-[328px] shadow-lg py-4 border p-[5.5em] mx-auto w-[55%] flex bg-[rgb(225,220,213,0.9)] rounded-lg gap-10">
          <div className="w-full flex flex-col items-center justify-center">
            <h3
              className="text-[32px]"
              style={{ lineHeight: "38px", fontWeight: "500" }}
            >
              Customize a dream furniture just for you
            </h3>
            <p
              className="my-6 text-[15px] text-center"
              style={{ lineHeight: "24px" }}
            >
              Make your home look unique with Wudify! customize your furniture
              to bring out your personal style and elevate any space. With
              Wudify, you can create the perfect furniture to fit your home.
            </p>
            <CustomMiniButton label={"Start Now"} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JumbotronSection;
