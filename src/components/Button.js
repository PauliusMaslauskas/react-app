import React from "react";

function Button({ children, onClick, className }) {
  return (
    <button
      className={`hover:bg-blue-100 text-sky-400/100 font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
