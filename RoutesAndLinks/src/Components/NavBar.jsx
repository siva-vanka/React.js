import React from "react";
import { Link, NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";
const links = [
  {
    path: "/",
    text: "Home",
  },

  {
    path: "/cart",
    text: "Cart",
  },

  {
    path: "/about",
    text: "About",
  },

  {
    path: "/users",
    text: "Users",
  },
];

const NavBar = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/cart">Cart</Link> */}

      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.path}
        //     // style={({ isActive }) => {
        //     //   return isActive ? activeStyle : defaultStyle;
        // }}

            className={({isActive})=>{

                return isActive ? Styles.activeStyle : Styles.defaultStyle


            }}
            
          >
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavBar;
