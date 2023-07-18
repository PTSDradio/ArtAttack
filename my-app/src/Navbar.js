import React from "react";
import { NavLink } from "react-router-dom";





function NavBar() {
  return (
    <div className="navbarStyles">
      <nav>
      <NavLink to="/" className="topnav"> Home </NavLink>
      <NavLink to="/GenerateNewCard" className="topnav"> Generate New Card </NavLink>
      <NavLink to="/LearnMore" className="topnav"> Learn More </NavLink>
      <NavLink to="/CardInventory" className="topnav"> Card Inventory </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;