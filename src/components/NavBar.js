import React, { useState } from "react";
import NavBarButtom from "../components/NavBarButton";
import NavLink from "./NavLink";

const routes = [
  { name: "Home", to: "/" },
  { name: "Todo", to: "todo" },
  { name: "Calculator", to: "calculator" }
];

function NavBar() {
  const [isBurgerOpen, seIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    isBurgerOpen(!isBurgerOpen);
  };

  return (
    <nav className="bg-sky-300 p-3.5 2xs">
      <div className="md:hidden">
        <NavBarButtom onClick={toggleBurgerMenu}>☰</NavBarButtom>
      </div>
      <ul
        className={`space-x-7 mx-5 flex-col md:flex-row md:flex md:items-center w-full md:w-auto ${
          isBurgerOpen ? "felx" : "hidden"
        }`}
      >
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
