import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@src/features/cart/cartReducer";
import { saveOnLocalStorage } from "./features/enhancers";

const store = configureStore({
  reducer: cartReducer,
  enhancers: [saveOnLocalStorage],
});

export default store;
