// hooks
import useQuery from "@hooks/useQuery";
// components
import Redirect from "@components/Redirect";
import ShopList from "@components/ShopList";
// style
import style from "./Search.module.css";

function Search() {
  const { q } = useQuery();
  return (
    <div className={style.searchPage}>
      <h2>Results for: {q}</h2>
      {q ? (
        <div className={style.listContainer}>
          <ShopList url="search.json" />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default Search;
