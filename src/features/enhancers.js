import { selectAllItem } from "./cart/cartReducer";

export function saveOnLocalStorage(createStore) {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);

    function newDispatch(action) {
      const result = store.dispatch(action);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(selectAllItem(store.getState()))
      );
      return result;
    }

    return { ...store, dispatch: newDispatch };
  };
}
