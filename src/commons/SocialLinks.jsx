import React from "react";

function SocialLinks() {
  return (
    <div>
      <div className="flex gap-4">
        <img className="cursor-pointer" src="/assets/x_icon.png" alt="" />
        <img
          className="cursor-pointer"
          src="/assets/facebook_icon.png"
          alt=""
        />
        <img
          className="cursor-pointer"
          src="/assets/instagram_icon.png"
          alt=""
        />
        <img
          className="cursor-pointer"
          src="/assets/linkedin_icon.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SocialLinks;
