import React from "react";

function CustomInputField({ label, type = "text", placeholder = "" }) {
  return (
    <div className="mb-5 text-left">
      <div className="mb-2 text-[14px] font-[500]">{label}</div>
      <div>
        <input
          className="w-full text-[14px] font-[400] py-3 pl-3 border rounded-md outline-none"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default CustomInputField;
