// types
import PropTypes from "prop-types";
// hooks
import useAxios from "@src/hooks/useAxios";
// components
import { Ring } from "@uiball/loaders";
import ShopItem from "@components/ShopItem";
// utils
import { parseShopData } from "@src/utils";
// style
import style from "./ShopList.module.css";

const { VITE_RAPID_API_KEY: API_KEY } = import.meta.env;
const baseUrl = /* "https://klekt.p.rapidapi.com/" */ "/static/";

function ShopList({ url = "" }) {
  const { data, isLoading, error } = useAxios(baseUrl + url, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "klekt.p.rapidapi.com",
    },
  });

  return (
    <div className={style.shopList}>
      {isLoading && (
        <span className={style.loaderContainer} data-testid="loader">
          <Ring size={40} lineWeight={5} speed={2} color="black" />
        </span>
      )}
      {!isLoading &&
        parseShopData(data)?.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
    </div>
  );
}

ShopList.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ShopList;
