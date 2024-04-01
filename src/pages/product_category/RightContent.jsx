import React, { useState } from "react";
import MiniProductItem from "../../commons/MiniProductItem";
import { products } from "../../mock_data/product_categories";
import Pagination from "../../commons/Pagination";
import { HiArrowLongRight } from "react-icons/hi2";

function RightContent() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <div>
      <div className="text-[15px] font-[400] flex justify-between items-center py-3 border-y-[1px] border-gray-200">
        <div className="">Showing 1-12 of 200 results</div>
        <div className="flex gap-2">
          <div>Sort By:</div>
          <div>
            <select className="outline-none text-orange-500 text-[13px] cursor-pointer">
              <option>Most Popular</option>
              <option>New to Old</option>
              <option>Old to New</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          return <MiniProductItem product={product} />;
        })}
      </div>
      <hr className="mt-10" />
      <div className="mt-4 mb-5">
        <Pagination
          onPageChange={setPageNumber}
          currentPage={pageNumber}
          totalCount={products.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default RightContent;
