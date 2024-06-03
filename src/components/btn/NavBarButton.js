import React from "react";

function NavBarButton({ children, onClick, className }) {
  return (
    <button
      className={"text-base hover:text-white text-sky-900/100 font-medium py-2 px-4"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default NavBarButton;
