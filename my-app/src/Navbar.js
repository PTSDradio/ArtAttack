import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
<<<<<<< HEAD
    <div>
      <NavLink
        to="/"
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/GenerateNewCard"
        style={linkStyles}

      >
        Generate New Card
      </NavLink>
      <NavLink
        to="/LearnMore"
        style={linkStyles}
        
      >
        Learn More
      </NavLink>
      <NavLink
        to="/CardInventory"
        style={linkStyles}

        >
        Card Inventory
      </NavLink>
=======
    <div >
      <nav className="navbarStyles">
      <li> <NavLink to="/" > Home </NavLink></li>
      <li><NavLink to="/GenerateNewCard" > Generate New Card </NavLink></li>
      <li><NavLink to="/LearnMore" > Learn More </NavLink></li>
      <li><NavLink to="/CardInventory" > Card Inventory </NavLink></li>
      </nav>
>>>>>>> 6760037daa9779af7461cbcb01405f05adfdc6ed
    </div>
  );
}

export default NavBar;