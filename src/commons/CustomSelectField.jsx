import React from "react";

function CustomSelectField({
  label,
  type = "text",
  placeholder = "",
  list = [],
}) {
  return (
    <div className="mb-5 text-left">
      <div className="mb-2 text-[14px] font-[500]">{label}</div>
      <div>
        <select
          className="w-full text-[14px] font-[400] py-3 pl-3 border rounded-md outline-none"
          type={type}
          placeholder={placeholder}
        >
          {list.map((l) => {
            return <option>{l}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default CustomSelectField;
