// components
import { Routes, Route } from "react-router-dom";
import { Home, Shop, ShopList, ShopItemPage, NotFound } from "@pages";
import Redirect from "@components/Redirect";
import Navbar from "@components/Navbar";
// style
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <main className={style.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<Redirect to="/shop/trending" />} />
            <Route path="trending" element={<ShopList url="trending.json" />} />
            <Route
              path="streetwear"
              element={<ShopList url="streetwear.json" />}
            />
            <Route path="drops" element={<ShopList url="drops.json" />} />
            <Route path=":id" element={<ShopItemPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
