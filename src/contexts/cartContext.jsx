import { createContext, useState, useContext } from "react";
import useLocalStorage from "@hooks/useLocalStorage";

const Context = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems");

  function addCartItem(item) {
    setCartItems((prev) => {
      if (item.id in prev) {
        const prevItem = prev[item.id];
        return {
          ...prev,
          [item.id]: { ...prevItem, count: prevItem.count + 1 },
        };
      }
      return { ...prev, [item.id]: { ...item, count: 1 } };
    });
  }

  function removeCartItem(id) {
    setCartItems((prev) => {
      const { [id]: prevItem, ...cart } = prev;
      return cart;
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
      const prevItem = prev[id];
      if (prevItem.count === 1) {
        const { [id]: prevItem, ...cart } = prev;
        return cart;
      }
      return { ...prev, [id]: { ...prevItem, count: prevItem.count - 1 } };
    });
  }

  function clearCart() {
    setCartItems({});
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        increaseCartItem,
        decreaseCartItem,
        clearCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useCartContext = () => useContext(Context);
