import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@src/features/cartReducer";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
