import React from "react";
import classnames from "classnames";
import "./css/pagination.scss";
import { usePagination } from "../hooks/usePagination";
import { DOTS } from "../constants/texts";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];
  return (
    <ul
      className={classnames(
        "pagination-container flex justify-between w-full items-center",
        { [className]: className }
      )}
    >
      {/* Left navigation arrow */}
      <div
        onClick={onPrevious}
        className={`${currentPage === 1 ? "disabled" : "cursor-pointer"} border py-[8px] px-[12px] hover:bg-orange-400 hover:text-white rounded-lg`}
      >
        <li
          className={classnames("pagination-", {
            disabled: currentPage === 1,
          })}
        >
          <div className="flex gap-2 items-center">
            <div>
              <PiCaretLeftBold className="text-lg font-bold" />
            </div>
            <div className="">Previous</div>
          </div>
        </li>
      </div>
      <div className="flex gap-2 ">
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          // Render our Page Pills
          return (
            <div
              className={`${
                pageNumber === currentPage ? "border border-orange-400" : ""
              } py-[3px] px-[10px] rounded-lg hover:bg-orange-400 hover:text-white cursor-pointer w-[24px] flex items-center justify-center`}
              onClick={() => onPageChange(pageNumber)}
            >
              <li
                className={classnames("pagination-ite ", {
                  selected: pageNumber === currentPage,
                })}
                
              >
                {pageNumber}
              </li>
            </div>
          );
        })}
      </div>
      {/*  Right Navigation arrow */}
      <div
        onClick={onNext}
        className={`${
          currentPage === lastPage ? "disabled" : "cursor-pointer"
        } border py-[8px] px-[12px] hover:bg-orange-400 hover:text-white rounded-lg`}
      >
        <li
          className={classnames("pagination-ite", {
            disabled: currentPage === lastPage,
          })}
        >
          <div className="flex gap-2 items-center">
            <div className="">Next</div>
            <div>
              <PiCaretRightBold className="text-lg font-bold" />
            </div>
          </div>
        </li>
      </div>
    </ul>
  );
};

export default Pagination;
