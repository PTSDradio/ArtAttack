import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    float: "left",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "17px",
    background: "grey",
};

const navbarStyles = {
  display: "flex",
  justifyContent: "center",
};

function NavBar() {
  return (
    <div>
      <nav style={navbarStyles}>
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
      </nav>
    </div>
  );
}

export default NavBar;