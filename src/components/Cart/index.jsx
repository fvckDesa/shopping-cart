// types
import PropTypes from "prop-types";
// hooks
import { useSelector } from "react-redux";
// redux selectors
import { selectorCart, selectorTotal } from "@src/features/cart/cartSelector";
// components
import CartItem from "@components/CartItem";
import EmptyCart from "@components/EmptyCart";
// utils
import { IoIosArrowDropright } from "react-icons/io";
import LinkButton from "@components/LinkButton";
// style
import style from "./Cart.module.css";

function Cart({ isOpen, onClose }) {
  const cart = useSelector(selectorCart);
  const total = useSelector(selectorTotal);

  return (
    <div
      className={`${style.cartContainer} ${isOpen ? style.open : ""}`}
      onClick={onClose}
    >
      <div className={style.cart} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.cartTitle}>Your cart:</h1>
        <div className={style.cartList}>
          {cart.length === 0 && (
            <div className={style.emptyCartContainer}>
              <EmptyCart />
            </div>
          )}
          {cart.map((id) => (
            <CartItem key={id} id={id} />
          ))}
        </div>
        <footer className={style.cartFooter}>
          <span className={style.totalPrice}>Total: {total} €</span>
          <LinkButton
            disabled={total === 0}
            className={style.checkoutBtn}
            to="/checkout"
            size="sm"
          >
            Checkout <IoIosArrowDropright />
          </LinkButton>
        </footer>
      </div>
    </div>
  );
}

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Cart;
