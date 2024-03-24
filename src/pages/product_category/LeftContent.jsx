import React, { useState } from "react";
import BreadCrumb from "../../commons/BreadCrumb";
import CustomSlider from "../../commons/CustomSlider";
import ProductFilterItem from "../../commons/ProductFilterItem";
import { LIGHT_BLUE_COLOR } from "../../constants/texts";
import { fetchSubCategories } from "../../helpers/products";
import { colors } from "../../mock_data/colors";
import {
  product_categories,
  product_sub_categories,
} from "../../mock_data/product_categories";
import { vendors } from "../../mock_data/vendors";

function LeftContent({id}) {
  const [value, setValue] = useState([0, 100]);

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb main="Home" sub="Shop Furniture" />

      {/* Price Filter */}
      <div className="flex justify-between mt-14 items-center">
        <div className={`text-[20px] font-[500] text-[${LIGHT_BLUE_COLOR}]`}>
          Price(N)
        </div>
        <div className="text-[16px] font-[500]">Apply</div>
      </div>
      <div className="mt-5 mb-4">
        <CustomSlider value={value} setValue={setValue} />
      </div>
      <div className="flex items-center justify-between gap-2 mb-10">
        <div>
          <input
            value={`N${value[0]}`}
            className="outline-none border rounded-lg w-full p-[16px] text-[15px] font-[500]"
          />
        </div>
        <div className="w-[30px] h-[1.5px] bg-gray-600"></div>
        <div>
          <input
            value={`N${value[1] * 100000}`}
            className="outline-none border rounded-lg w-full p-[16px] text-[15px] font-[500]"
          />
        </div>
      </div>

      {/*Other Filter Section */}
      <ProductFilterItem
        name={"Category"}
        inputPlaceholder={"Search Category"}
        items={fetchSubCategories(product_sub_categories, id).map((p) => p.name)}
        inputOnChange={(e) => {}}
      />

      <ProductFilterItem
        name={"Brand"}
        inputPlaceholder={"Search Brand"}
        items={vendors.map((v) => v.name)}
        inputOnChange={(e) => {}}
      />


      <ProductFilterItem
        name={"Color"}
        inputPlaceholder={"Search Color"}
        items={colors.map((c) => c.name)}
        inputOnChange={(e) => {}}
      />
    </div>
  );
}

export default LeftContent;
