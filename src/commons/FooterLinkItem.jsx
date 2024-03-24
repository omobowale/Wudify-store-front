import React from "react";
import { redirectTo } from "../helpers/redirect";



function FooterLinkItem({ url, label }) {


  return <p onClick={() => redirectTo(url)} className="cursor-pointer font-[400] text-[16px] hover:text-orange-300">{label}</p>;
}

export default FooterLinkItem;
