// types
import { typeProduct } from "@types/";
// components
import { CgCloseO } from "react-icons/cg";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
// context
import { useCartContext } from "@contexts/cartContext";
// style
import style from "./CartItem.module.css";

function CartItem({ item: { name, brand, price, image, id, count } }) {
  const { removeCartItem, increaseCartItem, decreaseCartItem } =
    useCartContext();
  return (
    <div className={style.cartItem}>
      <button
        type="button"
        data-testid="delete"
        className={style.removeBtn}
        onClick={() => removeCartItem(id)}
      >
        <CgCloseO className={style.removeIcon} />
      </button>
      <img className={style.cartItem__image} src={image} alt="product image" />
      <h3 className={style.cartItem__name}>{`${brand} ${name}`}</h3>
      <span className={style.cartItem__price}>
        Price: {price} € x {count}
      </span>
      <div className={style.actionContainer}>
        <button
          type="button"
          data-testid="decrease"
          className={style.actionBtn}
          onClick={() => decreaseCartItem(id)}
        >
          <FiMinusCircle />
        </button>
        <button
          type="button"
          data-testid="increase"
          className={style.actionBtn}
          onClick={() => increaseCartItem(id)}
        >
          <FiPlusCircle />
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: typeProduct.isRequired,
};

export default CartItem;
