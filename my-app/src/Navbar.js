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

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
            background: "green",
            color: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/GenerateNewCard"
        exact
        style={linkStyles}
        activeStyle={{
            background: "green",
            color: "white",
        }}
      >
        Generate New Card
      </NavLink>
      <NavLink
        to="/LearnMore"
        exact
        style={linkStyles}
        activeStyle={{
            background: "green",
            color: "white",
        }}
      >
        Learn More
      </NavLink>
      <NavLink
        to="/CardInventory"
        exact
        style={linkStyles}
        activeStyle={{
            background: "green",
            color: "white",
        }}
        >
        Card Inventory
      </NavLink>
    </div>
  );
}

export default NavBar;