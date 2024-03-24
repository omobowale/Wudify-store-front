import React from "react";
import FooterLinkItem from "./FooterLinkItem";

function FooterMenuItem({ title, subLinks }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-[600] text-[16px]">{title}</p>
      {subLinks.map((sublink) => {
        return <FooterLinkItem label={sublink.label} url={sublink.url} />;
      })}
    </div>
  );
}

export default FooterMenuItem;
