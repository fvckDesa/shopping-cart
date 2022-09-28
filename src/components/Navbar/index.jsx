// components
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import NavItem from "@components/NavItem";
// style
import style from "./Navbar.module.css";

function Navbar() {
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
        <div className={style.navCart}>
          <FaShoppingCart />0
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
