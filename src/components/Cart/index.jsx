// types
import PropTypes from "prop-types";
import { typeCartItem } from "@types/";
// components
import CartItem from "@components/CartItem";
import EmptyCart from "@components/EmptyCart";
// utils
import { getTotal } from "@src/utils";
import { IoIosArrowDropright } from "react-icons/io";
import LinkButton from "@components/LinkButton";
// style
import style from "./Cart.module.css";

function Cart({
  items,
  isOpen,
  onClose,
  onDeleteItem,
  onIncreaseItem,
  onDecreaseItem,
}) {
  const total = getTotal(items);

  return (
    <div
      className={`${style.cartContainer} ${isOpen ? style.open : ""}`}
      onClick={onClose}
    >
      <div className={style.cart} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.cartTitle}>Your cart:</h1>
        <div className={style.cartList}>
          {Object.values(items).length === 0 && (
            <div className={style.emptyCartContainer}>
              <EmptyCart />
            </div>
          )}
          {Object.values(items).map(({ item, count }) => (
            <CartItem
              key={item.id}
              item={item}
              count={count}
              onDelete={onDeleteItem}
              onIncrease={onIncreaseItem}
              onDecrease={onDecreaseItem}
            />
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
  items: PropTypes.objectOf(typeCartItem).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onIncreaseItem: PropTypes.func.isRequired,
  onDecreaseItem: PropTypes.func.isRequired,
};

export default Cart;
