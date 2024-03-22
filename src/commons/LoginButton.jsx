import React from "react";

function LoginButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ fontSize: "8px" }}
      className="hover:text-white hover:bg-orange-300 rounded-full py-1 px-2 border-orange-300 border text-xs font-semibold text-orange-300"
    >
      {label}
    </button>
  );
}

export default LoginButton;
