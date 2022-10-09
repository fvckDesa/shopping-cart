// types
import PropTypes from "prop-types";
// hooks
import { useSelector, useDispatch } from "react-redux";
// redux
import { selectItemById, cartActions } from "@src/features/cart/cartReducer";
// components
import { CgCloseO } from "react-icons/cg";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
// style
import style from "./CartItem.module.css";

function CartItem({ id }) {
  const { name, brand, price, image, count } = useSelector((state) =>
    selectItemById(state, id)
  );
  const dispatch = useDispatch();
  return (
    <div className={style.cartItem}>
      <button
        type="button"
        data-testid="delete"
        className={style.removeBtn}
        onClick={() => dispatch(cartActions.deleteItem(id))}
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
          onClick={() => dispatch(cartActions.decreaseItem(id))}
        >
          <FiMinusCircle />
        </button>
        <button
          type="button"
          data-testid="increase"
          className={style.actionBtn}
          onClick={() => dispatch(cartActions.increaseItem(id))}
        >
          <FiPlusCircle />
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CartItem;
