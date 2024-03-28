import React from "react";
import ReviewStar from "./ReviewStar";

function ReviewItem({ review }) {
  return (
    <div className="flex gap-0 mb-6">
      <div className="w-[8%]">
        <img
          src="/assets/reviewer_1.jpg"
          alt="reviewer"
          className="w-[75px] h-[75px] rounded-full"
        />
      </div>
      <div className="w-[90%]">
        <ReviewStar value={review?.rating ?? 4} />
        <div className="font-[600] text-[16px] mb-2">Folasayo Ogunnaike</div>
        <div className="font-[500] text-[16px] mb-3 text-[#667185]">
          Based on the classical designs and is made from a single-mould poly
          carbonate plastic. the chairs have become extremely popular in recent
          years and are perfect fit for relaxed and more formal space.
        </div>
        <div className="font-[500] text-[12px] text-orange-500">
          15 May 2020 9:00 am
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
