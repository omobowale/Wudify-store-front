import React from "react";
import HeadingTitle from "../../commons/HeadingTitle";

function MyWudifySection() {
  return (
    <div className="my-16 w-[95%] mx-auto">
      <HeadingTitle
        title={"#MyWudify"}
        textAlignClass="text-center"
        fontSizeClass="text-[32px]"
      />
      <div className="h-[481px] flex gap-4 mt-5">
        <div className="flex flex-col w-1/4">
          <div className="h-1/2 w-full">
            <img
              src="/assets/my_wudify_post_1.png"
              alt="wudify_instagram_post"
              className="w-full"
            />
          </div>
          <div className="h-1/2 w-full">
            <img
              src="/assets/my_wudify_post_1.png"
              alt="wudify_instagram_post"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-1/4">
          <img
            src="/assets/my_wudify_post_3.png"
            alt="wudify_instagram_post"
            className="w-full"
          />
        </div>
        <div className="flex flex-col w-1/4">
          <div className="h-1/2 w-full">
            <img
              src="/assets/my_wudify_post_4.png"
              alt="wudify_instagram_post"
              className="w-full"
            />
          </div>
          <div className="h-1/2 w-full">
            <img
              src="/assets/my_wudify_post_5.png"
              alt="wudify_instagram_post"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-1/4">
          <img
            src="/assets/my_wudify_post_6.png"
            alt="wudify_instagram_post"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default MyWudifySection;
