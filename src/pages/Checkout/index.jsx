// components
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoIosArrowDropright } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import EmptyCart from "@components/EmptyCart";
import LinkButton from "@components/LinkButton";
import { Link } from "react-router-dom";
// utils
import { getTotal } from "@src/utils";
// style
import style from "./Checkout.module.css";

function Checkout({ items, onDeleteItem, onIncreaseItem, onDecreaseItem }) {
  return (
    <div className={style.checkoutPage}>
      {Object.values(items).length === 0 ? (
        <div className={style.emptyCartContainer}>
          <EmptyCart />
          <LinkButton className={style.shopBtn} to="/shop">
            Go to the shop <IoIosArrowDropright />
          </LinkButton>
        </div>
      ) : (
        <>
          <div className={style.shoppingCart}>
            <h1>Shopping cart</h1>
            <header className={style.productListHeader}>
              <h3>Product</h3>
              <h3>Quantity</h3>
              <h3>Total price</h3>
              <div />
            </header>
            <ul className={style.productsList}>
              {Object.values(items).map(
                ({ item: { brand, name, price, id, image }, count }) => (
                  <li className={style.productItem} key={id}>
                    <Link to={`/shop/${id}`} className={style.product}>
                      <img
                        className={style.product__image}
                        src={image}
                        alt="product image"
                      />
                      <span
                        className={style.product__name}
                      >{`${brand} ${name}`}</span>
                    </Link>
                    <div className={style.quantityContainer}>
                      <button
                        className={style.productItemBtn}
                        type="button"
                        onClick={() => onDecreaseItem(id)}
                      >
                        <BiMinus />
                      </button>
                      <span className={style.quantity}>{count}</span>
                      <button
                        className={style.productItemBtn}
                        type="button"
                        onClick={() => onIncreaseItem(id)}
                      >
                        <BiPlus />
                      </button>
                    </div>
                    <span className={style.price}>{price * count} €</span>
                    <div className={style.removeItemContainer}>
                      <button
                        className={`${style.removeItemBtn} ${style.productItemBtn}`}
                        type="button"
                        onClick={() => onDeleteItem(id)}
                      >
                        <IoClose />
                      </button>
                    </div>
                  </li>
                )
              )}
            </ul>
            <footer className={style.productListFooter}>
              <span className={style.total}>Total: {getTotal(items)} €</span>
            </footer>
          </div>
          <div className={style.payment}></div>
        </>
      )}
    </div>
  );
}

export default Checkout;
