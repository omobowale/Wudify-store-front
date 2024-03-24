import React from "react";
import { product_categories } from "../mock_data/product_categories";
import CustomMiniButton from "./CustomMiniButton";
import FooterLinkItem from "./FooterLinkItem";
import FooterMenuItem from "./FooterMenuItem";
import SocialLinks from "./SocialLinks";

const customerServices = {
  title: "Customer Service",
  links: [
    {
      id: 1,
      label: "Support Center",
      url: "",
    },
    {
      id: 2,
      label: "Shipping & Returns",
      url: "",
    },
    {
      id: 3,
      label: "Privacy Policy",
      url: "",
    },
    {
      id: 4,
      label: "FAQ",
      url: "",
    },
  ],
};

const companyDetails = {
  title: "Company",
  links: [
    {
      id: 1,
      label: "Our Story",
      url: "",
    },
    {
      id: 2,
      label: "Bespoke Service",
      url: "",
    },
    {
      id: 3,
      label: "Inspiration",
      url: "",
    },
    {
      id: 4,
      label: "Partner with us",
      url: "",
    },
  ],
};

const productCategories = {
  title: "Shop",
  links: product_categories.map((category, index) => {
    return {
      id: index + 1,
      label: category.name,
      url: category.slug,
    };
  }),
};

function Footer() {
  return (
    <div className="text-white bg-black py-10 w-full relative bottom-0">
      <div className="w-[95%] mx-auto flex gap-10 justify-around">
        <div className="flex flex-col gap-4 items-start">
          {/* Logo */}
          <img src="/assets/wudify_logo_footer.png" alt="Wudify logo" />

          {/* Mail subscription */}
          <p className="w-[80%] text-left">
            Be the first to receive all the recent updates, articles, and
            valuable materials.
          </p>
          <div className="flex items-center gap-1">
            <input
              placeholder="Email address"
              style={{ textDecoration: "strike-through" }}
              className="py-3 rounded-lg w-2/3 px-4 text-black"
            />
            <div className="w-1/3">
              <CustomMiniButton label={"Subscribe"} />
            </div>
          </div>

          {/* Icons */}
          <SocialLinks />
        </div>

        {/* CATEGORIES */}
        <FooterMenuItem
          title={productCategories.title}
          subLinks={productCategories.links}
        />

        {/* CUSTOMER SERVICES */}
        <FooterMenuItem
          title={customerServices.title}
          subLinks={customerServices.links}
        />

        {/* COMPANY */}
        <FooterMenuItem
          title={companyDetails.title}
          subLinks={companyDetails.links}
        />
      </div>

      {/* FOOTER LOWER PART */}
      <hr className="w-[88%] mx-auto my-12 text-gray-900" />
      <div className="flex justify-between mt-12 mb-8 mx-auto w-[90%] px-4">
        <div className="flex gap-6">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Security</p>
          <p>Sitemap</p>
        </div>
        <div>&copy; Wudify 2023. All rights reserved. </div>
      </div>
    </div>
  );
}

export default Footer;
