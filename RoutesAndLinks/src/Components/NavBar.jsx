import React from "react";
import { Link, NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
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

 const {isAuth,logout}= useContext(AuthContext)
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
  

            className={({isActive})=>{

                return isActive ? Styles.activeStyle : Styles.defaultStyle


            }}
            
          >
            {link.text}
          </NavLink>
        );
      })}
      <p>User Logged IN :{isAuth ? "YES" : "NO"} </p>
      {isAuth && <button onClick={logout}>logout</button>}
    </div>
  );
};

export default NavBar;
