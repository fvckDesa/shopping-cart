// hooks
import useAxios from "@src/hooks/useAxios";
// components
import { Ring } from "@uiball/loaders";

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
        <span className={style.loaderContainer}>
          <Ring size={40} lineWeight={5} speed={2} color="black" />
        </span>
      )}
      {!isLoading &&
        parseShopData(data)?.map(({ id, name, image }) => (
          <div key={id}>
            <p>{name}</p>
            <p>{image}</p>
          </div>
        ))}
    </div>
  );
}

export default ShopList;
