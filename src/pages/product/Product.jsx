import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import HeadingTitle from "../../commons/HeadingTitle";
import Layout from "../../commons/Layout";
import PageBreadCrumb from "../../commons/PageBreadCrumb";
import ReviewItem from "../../commons/ReviewItem";
import ViewAllButton from "../../commons/ViewAllButton";
import { IoIosArrowRoundForward } from "react-icons/io";

import {
  fetchCategoryById,
  fetchProductBySlug,
  fetchProductCategoryFromSubCategoryId,
} from "../../helpers/products";
import {
  products,
  product_categories,
  product_sub_categories,
} from "../../mock_data/product_categories";
import ProductDetailsSection from "./ProductDetailsSection";
import ProductReviewAndDescriptionToggleTab from "./ProductReviewAndDescriptionToggleTab";
import RelatedProductsSection from "./RelatedProductsSection";

const TAB_TEXTS = ["Product Description", "Reviews"];

function Product() {
  const [selectedTab, setSelectedTab] = useState(TAB_TEXTS[0]);
  const params = useParams();
  const { slug } = params;

  const product = fetchProductBySlug(products, slug);
  const subcategory = fetchProductCategoryFromSubCategoryId(
    product_sub_categories,
    product?.prod_sub_cat
  );
  const category = fetchCategoryById(
    product_categories,
    subcategory?.prod_category
  );

  return (
    <Layout>
      <div className="w-[85%] mx-auto mt-8">
        <PageBreadCrumb
          mainText={"Home"}
          subText={category?.name}
          otherText={product?.name}
          isActiveIndex={2}
        />
      </div>
      <div className="w-[85%] mx-auto mt-8">
        <ProductDetailsSection product={product} />
      </div>

      {/* Product Description, Review and Related Product */}
      <div className="w-[85%] mx-auto mb-8">
        <ProductReviewAndDescriptionToggleTab
          leftText={TAB_TEXTS[0]}
          rightText={TAB_TEXTS[1]}
          setSelected={setSelectedTab}
          selected={selectedTab}
        />
        <hr />

        {/* Tab content */}
        <div className="text-left mt-6 text-[16px] font-[500] text-[#667185]">
          {selectedTab === TAB_TEXTS[0] && (
            <div>{product.shortDescription}</div>
          )}
          {selectedTab === TAB_TEXTS[1] && (
            <div className="text-black">
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <div className="flex">
                <div className="w-[8%]"></div>
                <div className="flex gap-1 items-center w-[90%] cursor-pointer">
                  <p
                    className="text-underline font-[600] text-[18px]"
                    style={{ textDecoration: "underline" }}
                  >
                    See more reviews
                  </p>
                  <PiCaretDownBold className="text-lg font-bold" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Product Section */}
        <div className="mt-10 mb-24">
          <div className="flex justify-between items-center">
            <div>
              <HeadingTitle title="Related Products" />
            </div>
            <div>
              <ViewAllButton>
                <IoIosArrowRoundForward className="text-lg"/>
              </ViewAllButton>
            </div>
          </div>
          <RelatedProductsSection
            products={[product, product, product, product]}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Product;
