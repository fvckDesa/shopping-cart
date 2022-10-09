import { createSelector } from "@reduxjs/toolkit";
import { selectAllItem } from "./cartReducer";

export const selectorCart = createSelector(selectAllItem, (items) =>
  items.map((item) => item.id)
);

export const selectorTotal = createSelector(selectAllItem, (items) =>
  items.reduce((total, { price, count }) => total + price * count, 0)
);

export const selectorCount = createSelector(
  selectAllItem,
  (items) => items.length
);
