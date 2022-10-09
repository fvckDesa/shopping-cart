// hooks
import { useState } from "react";
import useAxios from "@hooks/useAxios";
import useQuery from "@hooks/useQuery";
import { useDispatch } from "react-redux";
// redux actions
import { cartActions } from "@src/features/cart/cartReducer";
// components
import { FaCartPlus } from "react-icons/fa";
import { Ring } from "@uiball/loaders";
// utils
import { formatProductDescription, formatPrice } from "@src/utils";
// style
import style from "./ShopItemPage.module.css";

const { VITE_RAPID_API_KEY: API_KEY } = import.meta.env;
const baseURL = "/static/";

function ShopItemPage() {
  const [isCompactDescription, setIsCompactDescription] = useState(true);
  const { brand } = useQuery();
  const { data, isLoading, error } = useAxios(baseURL + "productDetails.json", {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "klekt.p.rapidapi.com",
    },
  });
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      cartActions.addItem({
        id: data.id,
        name: data.name,
        brand,
        price: formatPrice(data.conditions[0].minPrice),
        image: data.assets[0].asset.preview,
      })
    );
  }

  return (
    <div className={style.shopItemPage}>
      {isLoading && <Ring size={40} lineWeight={5} speed={2} color="black" />}
      <div className={style.productInfo}>
        <h2 className={style.productInfo__name}>{`${brand} ${data?.name}`}</h2>
        <p className={style.productInfo__description}>
          {formatProductDescription(data?.description, isCompactDescription)}
          <br />
          <span onClick={() => setIsCompactDescription((prev) => !prev)}>
            Read {isCompactDescription ? "more" : "less"}
          </span>
        </p>
        <h1 className={style.productInfo__price}>
          {formatPrice(data?.conditions[0].minPrice)}€
        </h1>
        <div className={style.actionsContainer}>
          <button
            className={style.addToCartBtn}
            type="button"
            onClick={handleClick}
          >
            <FaCartPlus /> Add to cart
          </button>
          <a
            className={style.klektLink}
            href={`https://www.klekt.com/product/${data?.slug}`}
            target="_blanck"
          >
            Go on klekt
            <div />
          </a>
        </div>
      </div>
      <img
        className={style.productImage}
        src={data?.assets[0].asset.preview}
        alt="product image"
      />
    </div>
  );
}

export default ShopItemPage;
