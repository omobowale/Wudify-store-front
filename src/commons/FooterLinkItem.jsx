import React from "react";

function FooterLinkItem({ url, label }) {
  return <p className="cursor-pointer font-[400] text-[16px] hover:text-orange-300">{label}</p>;
}

export default FooterLinkItem;
