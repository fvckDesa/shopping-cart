// components
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import NavItem from "@components/NavItem";
// style
import style from "./Navbar.module.css";

function Navbar({ cartItemsCount, onCartClick, isCartOpen }) {
  return (
    <header className={style.navbar}>
      <Link to="/">
        <img className={style.logo} src="/All-Streetwear.png" alt="logo" />
      </Link>
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
          {cartItemsCount}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
