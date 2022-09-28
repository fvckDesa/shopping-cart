import React from "react";
// components
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// style
import style from "./Navbar.module.css";

function Navbar() {
  const navLinkClassName = ({ isActive }) =>
    `${style.navLink} ${isActive ? style.active : ""}`;

  return (
    <header className={style.navbar}>
      <NavLink to="/">
        <img className={style.logo} src="./All-Streetwear.png" alt="logo" />
      </NavLink>
      <nav>
        <NavLink className={navLinkClassName} to="/" end>
          Home
          <div />
        </NavLink>
        <NavLink className={navLinkClassName} to="/shop" end>
          Shop
          <div />
        </NavLink>
        <div className={style.navCart}>
          <FaShoppingCart />0
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
