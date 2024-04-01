import React, { useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import ColorCircle from "../../commons/ColorCircle";
import FullRoundedButton from "../../commons/FullRoundedButton";
import QuantityAdjuster from "../../commons/QuantityAdjuster";
import SocialLinks from "../../commons/SocialLinks";
import { product_colors } from "../../mock_data/product_colors";
import ProductThumbnailImage from "./ProductThumbnailImage";

function ProductDetailsSection({ product }) {
  const [quantityValue, setQuantityValue] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const getSelectedColor = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    setSelectedImage(product?.images?.main);
  }, [product]);

  return (
    <div className="flex gap-10 items-start justify-between">
      {/* Left section */}
      <div className="w-1/2">
        {/* Main image */}
        <div className="h-[457px]">
          <img
            className="h-[457px] w-full"
            src={selectedImage}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Other images */}
        <div className="flex gap-[20px] items-center justify-between w-full mt-[20px]">
          <ProductThumbnailImage
            imagePath={product?.images?.main}
            onSelect={setSelectedImage}
            selected={selectedImage === product?.images?.main}
          />

          {product?.images?.others.map((image) => {
            return (
              <ProductThumbnailImage
                imagePath={image}
                onSelect={setSelectedImage}
                selected={selectedImage === image}
              />
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 text-left mt-0 pt-0">
        <div>
          <h3 className="text-[28px] font-[600] mb-3">{product?.name}</h3>

          {/* Description */}
          <p className="text-[16px] font-[500] mb-4 text-[#667185]">
            {product?.shortDescription}
          </p>

          {/* SkU and Brand */}
          <div className="flex gap-3 mb-6 text-[14px] font-[500] mb-3 text-[#667185]">
            <p>SKU: {product?.sku}</p>
            <p>
              BRAND:{" "}
              <span className="text-orange-400">
                {product?.brand?.toUpperCase()}
              </span>
            </p>
          </div>

          {/* Price */}
          <div className="text-[28px] font-[600] mb-4">N{product?.price}</div>

          {/* Color */}
          <div className="text-[14px] font-[600] mb-6">
            <p className="mb-3">Choose a Color </p>
            <div className="flex gap-1">
              {product_colors.map((color) => {
                return (
                  <ColorCircle
                    colorHex={color.hex}
                    getColor={getSelectedColor}
                  />
                );
              })}
            </div>
          </div>

          {/* Quantity */}
          <div className="text-[14px] font-[600] mb-6">
            <p className="mb-3">Quantity</p>
            <QuantityAdjuster
              quantityValue={quantityValue}
              setQuantityValue={setQuantityValue}
            />
          </div>

          {/* Installation Request */}
          <div className="flex gap-1 items-start">
            <div className="mt-3">
              <input type="checkbox" />
            </div>
            <div>
              <div className="flex mb-3 items-center">
                <div className="text-[18px] font-[500] mr-3">
                  Add Installation
                </div>
                <div className="bg-orange-400 text-white rounded-lg py-1.5 px-3 mr-4">
                  Recommended
                </div>
                <div className="text-[24px] font-[600] ml-10">N10,000</div>
              </div>
              <div className="text-[14px] font-[400]">
                Save time during installation when you add this service to your
                cart.
              </div>
            </div>
          </div>

          {/* Cart and Favourite */}
          <div className="flex items-center justify-start gap-5 mt-5">
            <div>
              <FullRoundedButton
                label={"Buy Now"}
                bgColor="#FF9D21"
                textColor={"white"}
                className={`hover:bg-[white] hover:text-[#FF9D21] text-[white] bg-[#FF9D21]`}
              />
            </div>
            <div>
              <FullRoundedButton
                label={"Add To Cart"}
                bgColor="white"
                textColor={"#FF9D21"}
                className={`hover:text-[white] hover:bg-[#FF9D21] bg-[white] text-[#FF9D21] border-2 border-orange-300`}
              />
            </div>
            <div>
              <FiHeart className="" style={{ fontSize: "2.5em" }} />
            </div>
          </div>

          {/* Social Links Sharing */}
          <div className="text-[14px] font-[600] mb-6 mt-5">
            <p className="mb-3">Share Product</p>
            <div className="flex gap-1">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSection;
