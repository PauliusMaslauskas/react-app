import React, { useEffect, useState } from "react";
import NavBarButton from "../components/btn/NavBarButton";
import NavLink from "./NavLink";

const routes = [
  { name: "Home", to: "/" },
  { name: "Todo", to: "todo" },
  { name: "Calculator", to: "calculator" },
];

function NavBar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  window.onresize = function() {
    if(window.outerWidth >= 767){
      setIsBurgerOpen(false)
    }
  }

  return (
    <nav className="bg-sky-300 p-3.5">
      <div className="md:hidden">
        <NavBarButton onClick={toggleBurgerMenu}>☰</NavBarButton>
      </div>
      <div
        className={`fixed bg-white rounded-lg p-5 shadow-md ${
          isBurgerOpen ? "felx" : "hidden"
        }`}
      >
        <ul>
          {routes.map((route) => (
            <li key={route.name} className="mb-4">
              <NavLink to={route.to}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <ul className="hidden md:flex space-x-7 mx-5 items-center w-full">
        {routes.map((route) => (
          <li key={route.name}>
            <NavLink to={route.to}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
