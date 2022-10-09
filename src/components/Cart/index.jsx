// types
import PropTypes from "prop-types";
// components
import CartItem from "@components/CartItem";
import EmptyCart from "@components/EmptyCart";
// context
import { useCartContext } from "@contexts/cartContext";
// utils
import { getTotal } from "@src/utils";
import { IoIosArrowDropright } from "react-icons/io";
import LinkButton from "@components/LinkButton";
// style
import style from "./Cart.module.css";

function Cart({ isOpen, onClose }) {
  const { cartItems } = useCartContext();
  const total = getTotal(cartItems);

  return (
    <div
      className={`${style.cartContainer} ${isOpen ? style.open : ""}`}
      onClick={onClose}
    >
      <div className={style.cart} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.cartTitle}>Your cart:</h1>
        <div className={style.cartList}>
          {Object.values(cartItems).length === 0 && (
            <div className={style.emptyCartContainer}>
              <EmptyCart />
            </div>
          )}
          {Object.values(cartItems).map((item) => (
            <CartItem key={item.id} item={item} />
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
