import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
    <div >
      <nav className="navbarStyles">
      <li> <NavLink to="/" > Home </NavLink></li>
      <li><NavLink to="/GenerateNewCard" > Generate New Card </NavLink></li>
      <li><NavLink to="/LearnMore" > Learn More </NavLink></li>
      <li><NavLink to="/CardInventory" > Card Inventory </NavLink></li>
      </nav>
    </div>
  );
}

export default NavBar;