// components
import { Link } from "react-router-dom";
// style
import style from "./ShopItem.module.css";

function ShopItem({ id, name, image }) {
  return (
    <Link className={style.shopItem} to={`/shop/${id}`}>
      <img className={style.shopItem__image} src={image} />
      <h3 className={style.shopItem__name}>{name}</h3>
    </Link>
  );
}

export default ShopItem;
