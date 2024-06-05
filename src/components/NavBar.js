import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import Button from "./btn/Button";

const routes = [
  { name: "Home", to: "/" },
  { name: "Todo", to: "todo" },
  { name: "Calculator", to: "calculator" },
  { name: "Upload Image", to: "imageupload" },
];

function NavBar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  window.onresize = function () {
    if (window.outerWidth >= 767) {
      setIsBurgerOpen(false);
    }
  };

  return (
    <nav className="bg-slate-300/50 p-3.5">
      <div className="md:hidden">
        <Button size ="lb" variant="black" onClick={toggleBurgerMenu}>☰</Button>
      </div>
      <div
        className={`fixed bg-white rounded-lg p-5 shadow-md ${
          isBurgerOpen ? "felx" : "hidden"
        }`}
      >
        <Button variant="black" className="absolute top-1 right-1" onClick={toggleBurgerMenu}>
          X
        </Button>
        <ul>
          {routes.map((route) => (
            <li key={route.name} className="mb-4">
              <NavLink variant="black" to={route.to}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <ul className="hidden md:flex space-x-7 mx-5 items-center w-full">
        {routes.map((route) => (
          <li key={route.name}>
            <NavLink variant="black" to={route.to}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
