// hooks
import { useState } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
// components
import { Routes, Route } from "react-router-dom";
import { Home, Shop, ShopItemPage, NotFound, Checkout, Search } from "@pages";
import Redirect from "@components/Redirect";
import Navbar from "@components/Navbar";
import ShopList from "@components/ShopList";
import Cart from "@components/Cart";
// utils
import { countCartItems } from "@src/utils";
// style
import style from "./App.module.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", {});

  function toggleCart() {
    setIsOpen((prev) => !prev);
  }

  function addItemToCart(item) {
    setCartItems((prev) => ({
      ...prev,
      [item.id]: { item, count: (prev[item.id]?.count ?? 0) + 1 },
    }));
  }

  function deleteCartItem(id) {
    setCartItems((prev) => {
      const { [id]: _, ...other } = prev;
      return { ...other };
    });
  }

  function increaseCartItem(id) {
    setCartItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], count: prev[id].count + 1 },
    }));
  }

  function decreaseCartItem(id) {
    setCartItems((prev) => {
      const { item, count } = prev[id];
      // delete item if his count is 0
      if (count - 1 <= 0) {
        const { [id]: _, ...other } = prev;
        return { ...other };
      }

      return { ...prev, [id]: { item, count: count - 1 } };
    });
  }

  function clearCart() {
    setCartItems({});
  }

  return (
    <div className={style.App}>
      <Navbar
        cartItemsCount={countCartItems(cartItems)}
        isCartOpen={isOpen}
        onCartClick={toggleCart}
      />
      <Cart
        items={cartItems}
        isOpen={isOpen}
        onClose={toggleCart}
        onDeleteItem={deleteCartItem}
        onIncreaseItem={increaseCartItem}
        onDecreaseItem={decreaseCartItem}
      />
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
            <Route
              path=":id"
              element={<ShopItemPage onAddItemToCart={addItemToCart} />}
            />
          </Route>
          <Route
            path="/checkout"
            element={
              <Checkout
                items={cartItems}
                onDeleteItem={deleteCartItem}
                onIncreaseItem={increaseCartItem}
                onDecreaseItem={decreaseCartItem}
                onBuy={clearCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
