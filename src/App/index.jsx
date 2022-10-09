// hooks
import { useState } from "react";
// components
import { Routes, Route } from "react-router-dom";
import { Home, Shop, ShopItemPage, NotFound, Checkout, Search } from "@pages";
import Redirect from "@components/Redirect";
import Navbar from "@components/Navbar";
import ShopList from "@components/ShopList";
import Cart from "@components/Cart";
// style
import style from "./App.module.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCart() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={style.App}>
      <Navbar isCartOpen={isOpen} onCartClick={toggleCart} />
      <Cart isOpen={isOpen} onClose={toggleCart} />
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
            <Route path="search" element={<Search />} />
            <Route path=":id" element={<ShopItemPage />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
