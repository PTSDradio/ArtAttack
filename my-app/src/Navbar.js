import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ money }) {
  return (
    <div>
      <nav className="navbarStyles">
        <li>
          {" "}
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/Battle"> Battle </NavLink>
        </li>
        <li>
          <NavLink to="/PullCards"> Pull Cards </NavLink>
        </li>
        <li>
          <NavLink to="/LearnMore"> Learn More </NavLink>
        </li>
        <li>
          <NavLink to="/CardInventory"> Card Inventory </NavLink>
        </li>
        <li id="money">Doubloons:  {money}</li>
      </nav>
    </div>
  );
}

export default NavBar;
