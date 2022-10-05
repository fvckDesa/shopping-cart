import style from "./EmptyCart.module.css";

function EmptyCart() {
  return (
    <div className={style.emptyCart}>
      <img
        className={style.emptyCart__image}
        src="/empty-box.svg"
        alt="empty box"
      />
      <span className={style.emptyCart__title}>Your cart is empty</span>
      <span className={style.emptyCart__subtitle}>
        Looks like you haven't added anything to your cart yet
      </span>
    </div>
  );
}

export default EmptyCart;
