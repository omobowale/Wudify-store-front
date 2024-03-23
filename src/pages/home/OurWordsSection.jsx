import React from "react";

function OurWordsSection() {
  return (
    <div className="flex w-[90%] mx-auto mb-16 items-center">
      <div className="flex gap-3 items-center justify-center">
        <div>
          <img
            src={"/assets/word_original_product.png"}
            alt="wudify_quality_product"
          />
        </div>
        <div className="text-left">
          <h3 className="text-[18px] font-[600]">Original Products</h3>
          <p className="text-[14px] w-[80%]">
            We ensure money-back guarantee if the product is counterfeit
          </p>
        </div>
      </div>
      <div className="bg-gray-600 h-8 w-[2.5px] mr-20"></div>

      <div className="flex gap-3 items-center justify-center">
        <div>
          <img
            src={"/assets/word_original_product.png"}
            alt="wudify_quality_product"
          />
        </div>
        <div className="text-left">
          <h3 className="text-[18px] font-[600]">Satisfaction Guarantee</h3>
          <p className="text-[14px] w-[80%]">
            We ensure money-back guarantee if the product is counterfeit
          </p>
        </div>
      </div>
      <div className="bg-gray-600 h-8 w-[2.5px] mr-20"></div>
      <div className="flex gap-3 items-center justify-center">
        <div>
          <img
            src={"/assets/word_original_product.png"}
            alt="wudify_quality_product"
          />
        </div>
        <div className="text-left">
          <h3 className="text-[18px] font-[600]">Fast {'&'} Free Shipping</h3>
          <p className="text-[14px] w-[80%]">
            We ensure money-back guarantee if the product is counterfeit
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurWordsSection;
