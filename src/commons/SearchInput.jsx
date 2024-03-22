import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput() {
  return (
    <div className="">
      <div className="flex gap-2 w-full mx-auto border border-1 border-black rounded-md p-2.5">
        <span>
          <CiSearch className="text-lg" />
        </span>
        <input
          className="outline-none w-full"
          placeholder="Search everything at Wudify online store"
        />
      </div>
    </div>
  );
}

export default SearchInput;
