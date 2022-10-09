// types
import PropTypes from "prop-types";
// hooks
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
// components
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import NavItem from "@components/NavItem";
// context
import { useCartContext } from "@contexts/cartContext";
// utils
import { debounce } from "@src/utils";
// style
import style from "./Navbar.module.css";

function Navbar({ onCartClick, isCartOpen }) {
  const [lastPage, setLastPage] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCartContext();

  function redirectSearch(search = "") {
    if (!location.pathname.includes("/shop/search")) {
      setLastPage(location.pathname);
    }
    navigate(search.length > 0 ? `/shop/search?q=${search}` : lastPage);
  }

  function clearSearch(e) {
    e.target.value = "";
  }

  function handleDelete(e) {
    clearSearch(e);
    if (location.pathname.includes("/shop/search")) {
      redirectSearch();
    }
  }

  return (
    <header className={style.navbar}>
      <div className={style.navbar__left}>
        <Link to="/">
          <img className={style.logo} src="/All-Streetwear.png" alt="logo" />
        </Link>
        <div className={style.searchBar}>
          <FaSearch />
          <input
            type="text"
            placeholder="Type keyword here"
            onInput={debounce((e) => redirectSearch(e.target.value))}
            onBlur={clearSearch}
          />
          <button className={style.clearBtn} onClick={handleDelete}>
            <IoClose />
          </button>
        </div>
      </div>
      <nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/shop">Shop</NavItem>
        <button
          className={`${style.navCart} ${isCartOpen ? style.open : ""}`}
          onClick={onCartClick}
        >
          <FaShoppingCart />
          {Object.keys(cartItems).length}
        </button>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  onCartClick: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
};

export default Navbar;
