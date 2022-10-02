// components
import CartItem from "@components/CartItem";
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
            <div className={style.emptyCart}>
              <img className={style.emptyCart__image} src="/empty-box.svg" />
              <span className={style.emptyCart__title}>Your cart is empty</span>
              <span className={style.emptyCart__subtitle}>
                Looks like you haven't added anything to your cart yet
              </span>
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

export default Cart;
