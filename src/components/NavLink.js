import React from "react";
import { Link } from "react-router-dom";
import Button from "./btn/Button";

function NavLink({ to, children }) {
  return (
    <Link to={to}>
      <Button variant="black">{children}</Button>
    </Link>
  );
}

export default NavLink;
