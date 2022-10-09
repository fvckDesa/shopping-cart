import {
  createReducer,
  createAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const cartActions = {
  addItem: createAction("cart/addItem"),
  deleteItem: createAction("cart/deleteItem"),
  clear: createAction("cart/clear"),
  increaseItem: createAction("cart/increaseItem"),
  decreaseItem: createAction("cart/decreaseItem"),
};

const cartAdapter = createEntityAdapter();
const cartSelectors = cartAdapter.getSelectors();

const cartReducer = createReducer(cartAdapter.getInitialState(), {
  [cartActions.addItem]: cartAdapter.addOne,
  [cartActions.deleteItem]: cartAdapter.removeOne,
  [cartActions.clear]: cartAdapter.removeAll,
  [cartActions.increaseItem]: (state, action) => {
    const { id } = action.payload;
    const prevCount = cartSelectors.selectById(state, id).count;
    cartAdapter.updateOne(state, {
      id,
      count: prevCount + 1,
    });
  },
  [cartActions.decreaseItem]: (state, action) => {
    const { id } = action.payload;
    const prevCount = cartSelectors.selectById(state, id).count;
    if (prevCount === 1) {
      cartAdapter.removeOne(state, id);
    }
    cartAdapter.updateOne(state, {
      id,
      count: prevCount - 1,
    });
  },
});

export default cartReducer;
