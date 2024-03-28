import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

function ReviewStar({ value }) {
    return (
        <div className="flex gap-1 item-center mb-2 ">
            <MdOutlineStarPurple500 className={`${value >= 1 ? 'text-orange-500' : ''}`} style={{ fontSize: "24px" }} />
            <MdOutlineStarPurple500 className={`${value >= 2 ? 'text-orange-500' : ''}`}  style={{ fontSize: "24px" }} />
            <MdOutlineStarPurple500 className={`${value >= 3 ? 'text-orange-500' : ''}`}  style={{ fontSize: "24px" }} />
            <MdOutlineStarPurple500 className={`${value >= 4 ? 'text-orange-500' : ''}`}  style={{ fontSize: "24px" }} />
            <MdOutlineStarPurple500 className={`${value >= 5 ? 'text-orange-500' : ''}`}  style={{ fontSize: "24px" }} />
        </div>
    )
}

export default ReviewStar