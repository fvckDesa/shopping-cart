// components
import { Link } from "react-router-dom";
// style
import style from "./ShopItem.module.css";

function ShopItem({ item: { id, name, image, brand = "", price } }) {
  return (
    <Link className={style.shopItem} to={`/shop/${id}?brand=${brand}`}>
      <img className={style.shopItem__image} src={image} />
      <h3 className={style.shopItem__name}>{`${brand} ${name}`}</h3>
      <h1 className={style.shopItem__price}>{price}€</h1>
    </Link>
  );
}

export default ShopItem;
