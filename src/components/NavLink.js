import React from "react";
import { Link } from "react-router-dom";
import NavBarButton from "./NavBarButton";

function NavLink({ to, children }) {
  return (
    <Link to={to}>
      <NavBarButton>{children}</NavBarButton>
    </Link>
  );
}

export default NavLink;
