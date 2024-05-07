import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

export default function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All USERS</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">NEW PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">LOGIN</NavLink>
      </li>
    </ul>
  );
}
