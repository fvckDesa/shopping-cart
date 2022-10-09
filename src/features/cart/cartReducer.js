import {
  createReducer,
  createAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";

export const cartActions = {
  addItem: createAction("cart/addItem"),
  deleteItem: createAction("cart/deleteItem"),
  clear: createAction("cart/clear"),
  increaseItem: createAction("cart/increaseItem"),
  decreaseItem: createAction("cart/decreaseItem"),
};

const initCartItems = JSON.parse(localStorage.getItem("cartItems") ?? "[]");

const cartAdapter = createEntityAdapter();
const cartSelectors = cartAdapter.getSelectors();

const initState = cartAdapter.setAll(
  cartAdapter.getInitialState(),
  initCartItems
);

const cartReducer = createReducer(initState, {
  [cartActions.addItem]: (state, action) => {
    const item = action.payload;
    if (cartSelectors.selectIds(state).includes(item.id)) {
      cartAdapter.updateOne(state, {
        id: item.id,
        changes: { count: cartSelectors.selectById(state, item.id).count + 1 },
      });
      return;
    }
    cartAdapter.addOne(state, { ...item, count: 1 });
  },
  [cartActions.deleteItem]: cartAdapter.removeOne,
  [cartActions.clear]: cartAdapter.removeAll,
  [cartActions.increaseItem]: (state, action) => {
    const id = action.payload;
    const prevCount = cartSelectors.selectById(state, id).count;
    cartAdapter.updateOne(state, {
      id,
      changes: { count: prevCount + 1 },
    });
  },
  [cartActions.decreaseItem]: (state, action) => {
    const id = action.payload;
    const prevCount = cartSelectors.selectById(state, id).count;
    if (prevCount === 1) {
      cartAdapter.removeOne(state, id);
    }
    cartAdapter.updateOne(state, {
      id,
      changes: { count: prevCount - 1 },
    });
  },
});

export const { selectAll: selectAllItem, selectById: selectItemById } =
  cartSelectors;

export default cartReducer;
