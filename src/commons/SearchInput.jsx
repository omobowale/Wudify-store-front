import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput({placeholder, onChange}) {
  return (
    <div className="h-auto">
      <div className="flex gap-2 w-full mx-auto border border-1 border-black rounded-md p-2.5">
        <span>
          <CiSearch className="text-lg" />
        </span>
        <input
          className="outline-none w-full"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SearchInput;
