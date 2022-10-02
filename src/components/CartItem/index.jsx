// components
import { CgCloseO } from "react-icons/cg";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
// style
import style from "./CartItem.module.css";

function CartItem({
  item: { name, brand, price, image, id },
  count,
  onDelete,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className={style.cartItem}>
      <button
        type="button"
        className={style.removeBtn}
        onClick={() => onDelete(id)}
      >
        <CgCloseO className={style.removeIcon} />
      </button>
      <img className={style.cartItem__image} src={image} />
      <h3 className={style.cartItem__name}>{`${brand} ${name}`}</h3>
      <span className={style.cartItem__price}>
        Price: {price} € x {count}
      </span>
      <div className={style.actionContainer}>
        <button
          type="button"
          className={style.actionBtn}
          onClick={() => onDecrease(id)}
        >
          <FiMinusCircle />
        </button>
        <button
          type="button"
          className={style.actionBtn}
          onClick={() => onIncrease(id)}
        >
          <FiPlusCircle />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
